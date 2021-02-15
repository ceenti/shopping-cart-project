import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class CreateProduct extends Component{
    constructor(props){
        super(props)
        this.state = {
            newProduct:{}
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    onChangeHandler(event){
       
        let property = event.target.name
        let value = event.target.value

        this.setState({newProduct : {...this.state.newProduct , [property] : value}})
        if(!this.state.newProduct['id']){
            let newId= toString(Math.round(Math.random() * (10000 - 10) + 1))
            this.setState({newProduct : {...this.state.newProduct, ['id']:newId, [property] : value} }) 
        } else {
            this.setState({newProduct : {...this.state.newProduct, [property] : value} }) 
        }
        
    }


    render(){
        
        return(
            <div className="row d-flex justify-content-around flex-column align-items-center">

        <Form className="border p-2 rounded" style={{marginTop:'12em', textAlign: 'left', borderColor: 'success'}}>
            <h1>Crea un nuevo producto</h1>
            <FormGroup>
                <Label for="exampleEmail">Name: </Label>
                <Input type="text" name="name" id="exampleEmail" placeholder="Ingresa nombre del corte"  onChange= {this.onChangeHandler}/>
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Image: </Label>
                <Input type="text" name="image" id="examplePassword" placeholder="https://imageslink/200/200"  onChange= {this.onChangeHandler}/>
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Precio: </Label>
                <Input type="text" name="price" id="examplePassword" placeholder="$0.00"  onChange= {this.onChangeHandler}/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleSelect">Category</Label>
                <Input type="select" name="category" id="exampleSelect" onChange= {this.onChangeHandler}>
                <option></option>
                <option>Cerdo</option>
                <option>Pollo</option>
                <option>Res</option>
                </Input>
            </FormGroup>
            <Button className="btn-success" onClick= {
                () => {
                    this.props.saveProduct(this.state.newProduct)
                    this.props.returPage()
                }
            } >Guardar el producto</Button>
        </Form>
            </div>
        )
    }

}

export default CreateProduct; 