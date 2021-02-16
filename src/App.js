
import './App.css';
import React, {Component} from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
  Alert,
} from 'reactstrap';
import Filtro from './Components/Filtro/index';
import ToggleShowSection from './Components/ToggleShowSection/index';
import CreateProduct from './Components/CreateProduct/index';
import shoppingCart from '@iconify-icons/noto-v1/shopping-cart';
import meatOnBone from '@iconify-icons/twemoji/meat-on-bone';
import Shopping from './Components/Shopping/index';
import { Icon, InlineIcon } from '@iconify/react';
import homeIcon from '@iconify-icons/flat-color-icons/home';
import logo from './images/logo.jpg'
import RangePrices from './Components/Range/index'

class App extends Component{
  constructor(){
    super()
    this.state = {
      productList: [
        {
          id:'1',
          name: "Pierna de Cerdo",
          category:"cerdo",
          price:90,
          image:"https://baconmockup.com/204/202/"
        },
        {
          id:'2',
          name: "Tomahawk",
          category:"res",
          price:300,
          image:"https://baconmockup.com/207/205/"
        },
        {
          id:'3',
          name: "Pollo asado",
          category:"pollo",
          price:250,
          image:"https://baconmockup.com/210/205/"
        },
        {
          id:'4',
          name: "Fajitas de pollo",
          category:"pollo",
          price:180,
          image:"https://baconmockup.com/211/205/"
        },
        {
          id:'5',
          name: "Medallón de cerdo",
          category:"cerdo",
          price:180,
          image:"https://baconmockup.com/214/205/"
        },
        {
          id:'6',
          name: "Fajitas de pollo",
          category:"pollo",
          price:180,
          image:"https://baconmockup.com/211/205/"
        },
        {
          id:'7',
          name: "Medallón de cerdo",
          category:"cerdo",
          price:180,
          image:"https://baconmockup.com/214/205/"
        }
      ],
      filteredProducts: [],
      filterActive:false,
      homeSection: true,
      newProductSection:false,
      cartSection: false,
      newCartProduct: {},
      shoppinCartProducts : [
        {
          id:'5',
          name: "Medallón de cerdo",
          category:"cerdo",
          price:180,
          image:"https://baconmockup.com/214/205/"
        },
        {
          id:'6',
          name: "Fajitas de pollo",
          category:"pollo",
          price:170,
          image:"https://baconmockup.com/211/205/"
        },
        {
          id:'7',
          name: "Medallón de cerdo",
          category:"cerdo",
          price:160,
          image:"https://baconmockup.com/214/205/"
        }
      ],
      savedProd: false
    }

    this.toggleCartSectionHandler = this.toggleCartSectionHandler.bind(this)
    this.saveNewProductHandler = this.saveNewProductHandler.bind(this)
    this.toogleHomeSection = this.toogleHomeSection.bind(this)
    this.toogleProductSection = this.toogleProductSection.bind(this)
    this.addProductToCartHandler = this.addProductToCartHandler.bind(this)
    this.findProductInList = this.findProductInList.bind(this)
    this.addProductToCart = this.addProductToCart.bind(this)
    this.showSuccessSavedHandler = this.showSuccessSavedHandler.bind(this)
    this.currentCartList = this.currentCartList.bind(this)
    this.currentFilteredHandler = this.currentFilteredHandler.bind(this)
  }

  toggleCartSectionHandler(){
    this.setState({newProductSection: false})
    this.setState({homeSection: false})
    this.setState({cartSection: true})
  }

  toogleProductSection(){
    this.setState({cartSection: false})
    this.setState({homeSection: false})
    this.setState({newProductSection: true})
  }

  toogleHomeSection(){
    this.setState({cartSection: false})
    this.setState({newProductSection: false})
    this.setState({homeSection : true})
  }

  showSuccessSavedHandler(){
    this.setState({savedProd : !this.state.savedProd})
  }

  saveNewProductHandler(newProduct){
    newProduct['price'] = parseInt(newProduct['price'])
    this.setState({ productList : [...this.state.productList, {...newProduct} ] })
  }

  addProductToCartHandler(newCart){
    this.setState({shoppinCartProducts: [...this.state.shoppinCartProducts, {...newCart}]})
    
  }

  findProductInList(event){
    console.log(typeof(event.target.id))
    const productFound = this.state.productList.find( product => {
      let {id} = product
      return id === event.target.id
    })
    this.addProductToCart(productFound)
  }

  addProductToCart(product){
    this.setState({ shoppinCartProducts : [...this.state.shoppinCartProducts, product ]  })
  }
  currentCartList(newListArray){
    this.setState({shoppinCartProducts: newListArray})
  }
  currentFilteredHandler(newList){
    this.setState({filterActive : !this.state.filterActive})
    this.setState({filteredProducts : newList})
    console.log(newList)
  }

  render(props){
    let arrayToIterate = this.state.filterActive ? this.state.filteredProducts : this.state.productList 
    return(

      <>
        
        <div className="d-flex justify-content-between align-items-center container-fluid  rounded shadow" style={{position:'fixed', zIndex:'1', backgroundColor:'#EFEFEF'}}>
          
          <nav className="d-flex flex-row align-items-center justify-content-between container-fluid">
              {/* <div className="col-1"><img style={{width:'60px', margin:'5px'}} src={logo}/></div> */}
              <div className=" ">
                <Filtro
                    productList = {this.state.productList}
                    newFilteredList = {this.currentFilteredHandler}
                />
      
              </div>
              <div className="ml-4">
                <ToggleShowSection
                      showCartSection = {this.toggleCartSectionHandler}
                      icon = {shoppingCart} 
                  />

                  <ToggleShowSection
                      showNewProductSection = {this.toogleProductSection}
                      icon = {meatOnBone}
                  />

                  <ToggleShowSection
                      showHomeSection = {this.toogleHomeSection}
                      icon = {homeIcon} 
                  />
              </div>
          </nav>
        </div>
        {/* <div className="container">
          <RangePrices/>
          </div> */}
        <div className="App container d-flex flex-column justify-content-center" style={{zIndex:'-3'}}>
          
          { this.state.homeSection ?
            <div style={{marginTop:'150px'}}>
              {this.state.savedProd ? <Alert color="primary"> El producto se añadió al carrito</Alert>: null}
              <h1 className="" style={{textAlign:'center'}}>¿QUIÉRES LA MÁS SABROSA?</h1>
              <h5 className="" style={{textAlign:'center', color:'GrayText'}}>Nosotros te la ofrecemos</h5>
              <div className="App d-flex row my-4 justify-content-around " >
                
                {
                    arrayToIterate.map( product => {
                    let {id, name, category, price, image} = product
                      return(
                        
                        <Card style={{display: 'flex', margin: '6px', width:300}}>
                          <CardImg style={{width:'100%', height:200}} src={image} alt="Card image cap" />
                          <CardBody>
                            <CardTitle tag="h4">{name}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Precio: ${price}</CardSubtitle>
                            <CardText>Categoría: {category}</CardText>
                            <Button id={id} color="success" size="sm" block name="add" onClick= {this.findProductInList}>Añadir al carrito</Button>
                          </CardBody>
                        </Card>
              
                      )
                  })
                }
              </div>
            </div>
          :(
            this.state.cartSection ? (
              <Shopping
                productsList = {this.state.shoppinCartProducts}
                currentCartListEdited = {this.currentCartList}
              />
            ): (
              <CreateProduct
              saveProduct = {this.saveNewProductHandler}
              returPage = {this.toogleHomeSection}
            /> 
            )
          )

          }               
        </div>
                
      </>  
    )
  }

}


export default App;
