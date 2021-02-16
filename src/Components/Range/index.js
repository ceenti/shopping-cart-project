import React from "react";
import ReactDOM from "react-dom";
import { Range, getTrackBackground } from "react-range";

// let STEP = 10;
// let MIN = 90;
// let MAX = 350;

class RangePrices extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        maxChoice : 0,
        values: [500]
      }
  }

  render() {
    let STEP = 1;
    let MIN = this.props.minorPrice ? this.props.minorPrice : 0 ;
    let MAX = this.props.mayorPrice ? this.props.mayorPrice : 100 ;
    //this.setState({values : [this.props.productsList.length]})
   console.log(this.props.productsList.length)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "2em"
        }}
      >
        <Range
          values={this.state.values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(values) => this.setState({ values})}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={this.props.onMouseDown}
              onTouchStart={this.props.onTouchStart}
              onMouseDown = {this.props.choice(this.state.values[0].toFixed(1))}
              onTouchStart = {this.props.choice(this.state.values[0].toFixed(1))}
              style={{
                ...props.style,
                height: "3px",
                display: "flex",
                width: "100%"
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "5px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values: this.state.values,
                    colors: ["#548BF4", "#ccc"],
                    min: MIN,
                    max: MAX
                  }),
                  alignSelf: "center"
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "20px",
                width: "20px",
                borderRadius: "5px",
                backgroundColor: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 6px #AAA"
              }}
            >
              <div
                style={{
                  height: "10px",
                  width: "3px",
                  borderRadius: "50%",
                  backgroundColor: isDragged ? "#548BF4" : "#CCC"
                }}
              />
            </div>
          )}
        />
        <output style={{ marginTop: "5px" }} id="output">
          {this.state.values[0].toFixed(1)}
        </output>
      </div>
    );
  }
}
export default RangePrices
// const rootElement = document.getElementById("root");
// ReactDOM.render(<RangePrices />, rootElement);
