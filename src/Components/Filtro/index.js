import { render } from "@testing-library/react";
import React, {Component} from 'react'
import {
    Button, Form, FormGroup, Label, Input, FormText, Col
   } from 'reactstrap';


class Filtro extends Component{
    constructor(props){
        super(props);
        this.state = {
            filteredList : [],
            filterByCategory: false,
            filterByPrice: false,

        }
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
        let optionsFiltered = this.props.productList.filter( product => {
            return product[typeOfFilter]          
        })
    }

    render(){
        return(
            <>
                <FormGroup row md={6} className="my-4 d-flex col-8 justify-content-around align-items-center" >
                    <Label style={{textAlign:''}} for="exampleSelect"><h4 color="success">Filtra por: </h4></Label>
                    <Button outline className="btn-md mx-1 p-1"  color="primary" name="category" value="" onClick={this.onClickTypeOfFilter}>Categoría</Button>{' '}
                    <Button outline className="btn-md" color="success" name="price" value="" onClick={this.onClickTypeOfFilter}>Precio</Button>{' '}
                    <Col  lg={6}>
                        <Input type="select" className="btn-lg" name="category" id="exampleSelect">
                            <option value="">Elige tipo de filtrado</option>
                            <option value="pollo">Pollo</option>
                            <option value="cerdo">Cerdo</option>
                            <option value="res">Res</option>
                        </Input>
                    </Col>
                </FormGroup>
            </>
        )
    }
}

export default Filtro;
