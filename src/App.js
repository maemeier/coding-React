import React, {Component} from 'react';
import logo from './logo.svg';
import './style.css';


// create data
const products =[
  {id:1, name:"iphone", color:"Stonegrey", price:789},
  {id:2, name:"Samsung", color:"Midnight Blck", price:569},
  {id:3, name:"Hauwai P9", color:"Mystic Silver", price:272}
];

// get data

localStorage.setItem("products", JSON.stringify(products))

class App extends Component{


componentWillMount(){
 const products = this.getProducts();
}

getProducts(){
  const products = JSON.parse(localStorage.getItem("products"))
  console.log(products);

  this.setState({products})
}

handleAddProduct(){

}

handleUpdateProduct(){

}

handleDeleteProduct(){

}


render (){
  return(
    <div>
He
    </div>
  )
}
}
export default App;
