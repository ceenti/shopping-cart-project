import React, {Component} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    Table, Alert,
  } from 'reactstrap';
import { Icon, InlineIcon } from '@iconify/react';
import shoppingCart from '@iconify-icons/noto-v1/shopping-cart';
import homeIcon from '@iconify-icons/flat-color-icons/home';
import fullTrash from '@iconify-icons/flat-color-icons/full-trash';
import RemoveCartProduct from './../RemoveCartProduct/index'

class Shopping extends Component{
    constructor(props){
        super(props);
        this.state = {
            idToDelete : '',
            newCartList: [],
            alert: false,
            deletedAlert: false
        }
        this.onClickSaveCartListEdited = this.onClickSaveCartListEdited.bind(this)
        this.showAlert = this.showAlert.bind(this)
        this.showAlertEmpty = this.showAlertEmpty.bind(this)
        this.onClickToDeleteAll = this.onClickToDeleteAll.bind(this)
        this.totalPriceHandler = this.totalPriceHandler.bind(this)
    }
    showAlert(){
        
        setTimeout(() => {
            this.setState({alert : !this.state.alert})
        },2000)
        this.setState({alert : !this.state.alert})
    }
    showAlertEmpty(){
            setTimeout(() => {
                this.setState({deletedAlert : !this.state.deletedAlert})
            },5000)
            this.setState({deletedAlert : !this.state.deletedAlert}) 
    }

    onClickSaveCartListEdited(event){
        let idCartProduct = event.target.dataset.principal
        let currentCartList = this.props.productsList.filter(product => {
            return product.id !== idCartProduct  
        })
        this.setState({newCartList : currentCartList})
        this.props.currentCartListEdited(currentCartList) 
        this.showAlert()
        if(this.state.newCartList.length-1 === 0){ this.showAlertEmpty()}

    }
    onClickToDeleteAll(event){
        if(window.confirm("¿Estás seguro de eliminar todo?")){
            this.setState({newCartList : {}})
            this.props.currentCartListEdited([])
            this.showAlertEmpty()
            //event.target.classList.add('hidden')
            event.target.style.display = 'none'
        }
    }
    totalPriceHandler(){
        let result = this.props.productsList.reduce( (accum, product) => {
            accum += product.price
            return accum
        }, 0)
        return result  
    }

    render(){
        return(
            <div className="Shopping" style={{marginTop:'6em'}}>
                {this.state.alert ? <Alert color="warning"> Se removió el producto del carrito</Alert> : null }
                {this.state.deletedAlert ? <Alert color="primary"> El carrito está vacío, puedes añadir más ;)</Alert> : null}
                <h1 className="">CARRITO DE COMPRAS <Icon  style={{fontSize:'40'}} icon={shoppingCart}  /></h1>
                <div className="d-flex row justify-content-start flex-column">
                    <Table striped>
                        <thead>
                            <tr>
                            <th>Item #</th>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                        //if(this.props.productsList.length === 0)
                         this.props.productsList.map( (product, index) => {
                            let {id, name, category, price, image} = product
                            
                            return(
                                <tr>
                                    <th scope="row" data-category={category}>{++index}</th>
                                    <td><img width="60px" src={image}/></td>
                                    <td>{name}</td>
                                    <td>${price}</td>
                                    <td><strong><a href="#" data-principal={id} 
                                    onClick={
                                        (event) => {
                                            this.onClickSaveCartListEdited(event)
                                        }
                                    }>Eliminar</a></strong></td>
                                </tr>
                            )   
                        })}
                                <tr>
                                    <th scope="row"></th>
                                    <td></td>
                                    <th>Total</th>
                                    <td><strong>${this.totalPriceHandler()}</strong></td>
                                    <th>
                                    <Button  outline color="danger" onClick={this.onClickToDeleteAll}>Eliminar todos los productos</Button>{' '}
                                    </th>
                                </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}
export default Shopping;