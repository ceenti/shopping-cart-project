import { render } from "@testing-library/react";
import React, {Component} from 'react'
import {
    Button, Form, FormGroup, Label, Input, FormText, Col
   } from 'reactstrap';
import { Range } from 'react-range';
import RangePrices from "../Range";


class Filtro extends Component{
    constructor(props){
        super(props);
        this.state = {
            filteredList : [],
            filterByCategory: false,
            filterByPrice: false,
            minorPrice:0,
            mayorPrice:1000

        }
        this.onClickTypeOfFilter = this.onClickTypeOfFilter.bind(this)
        this.onChangeHandlerSelection = this.onChangeHandlerSelection.bind(this)
        this.getChoiceHandler = this.getChoiceHandler.bind(this)
        // this.onClickFilteredListHandler = this.onClickFilteredListHandler.bind(this)
    }

    onChangeHandlerSelection(event){
        let value = event.target.value
        let property = event.target.name
        this.props.productList.filter( () => {

        })
    }

    onClickTypeOfFilter(event){
        let typeOfFilter = event.target.name
        let options = []
        if(typeOfFilter === "category"){
            options = ["pollo","cerdo","res"]
        }
        if(typeOfFilter === "price"){
            let pricesArray = this.props.productList.map( product => product['price']).sort((a,b) => a - b)
            let minorPrice = pricesArray[0]
            let mayorPrice = pricesArray[pricesArray.lenght-1]
            this.setState({minorPrice : minorPrice})
            this.setState({mayorPrice : mayorPrice})
        }
        

    }

    // onClickFilteredListHandler(){
    //     this.props.newFilteredList(getChoiceHandler())
    // }

    getChoiceHandler(choice){
        parseInt(choice)
        let optionsFiltered = this.props.productList.filter( product => product.price < choice)
        this.props.newFilteredList(this.state.filteredList)
        //return optionsFiltered
    }

    render(){
        console.log(this.props)
        return(
            <>
               
                <FormGroup row className="my-4">
                    {/* <Label style={{textAlign:'center'}} for="exampleSelect"><h4 color="success">Filtro</h4></Label> */}
                    <Button outline className="btn-md mx-1 p-2"  color="primary" name="category" value="" onClick={this.onClickTypeOfFilter}>Categoría</Button>{' '}
                    <Button outline className="btn-md mx-1 p-2" color="success" name="price" value="" onClick={this.onClickTypeOfFilter}>Precio</Button>{' '}

                    <Col>
                        <Input type="select" className="btn-md p-1" name="category" id="exampleSelect">
                            <option value="">Filtro</option>
                            <option value="pollo">Pollo</option>
                            <option value="cerdo">Cerdo</option>
                            <option value="res">Res</option>
                        </Input>
                    </Col>
                    <Button className="btn-md mx-1 p-2 text-white" color="primary" name="price" value="" onClick={this.onClickFilteredListHandler}>Filtrar</Button>{' '}
                </FormGroup>
                <RangePrices
                    minorPrice = {this.state.minorPrice}
                    mayorPrice = {this.state.mayorPrice}
                    productsList = {this.props.productList} 
                    choice = {this.getChoiceHandler}
                    
                />
            </>
        )
    }
}

export default Filtro;
