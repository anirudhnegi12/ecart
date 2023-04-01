import React from 'react';
import Product from './Product';
import Footer from './Footer';
import Navbar from './Navbar';
import ProductList from './ProductList';

function App() {
  
  const data = [
    {
      photo: "https://i.dummyjson.com/data/products/100/thumbnail.jpg",
      title: "FASHION CRISTAL",
      category: "CRISTAL",
      price: 13,
    },
    {
      photo: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      title: "I-PHONE",
      category: "PHONE",
      price: 17,
    },
    {
      photo: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      title: "I-PHONE",
      category: "PHONE",
      price: 13,
    },
    {
      photo: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      title: "OPPO F19",
      category: "PHONE",
      price: 13,
    },
    {
      photo: "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
      title: "PERFUME OIL",
      category: "PERFUME",
      price: 13,
    },
    {
      photo: "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
      title: "RED-SPRAY",
      category: "SPRAY",
      price: 13,
    },
    {
      photo: "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
      title: "FRAGNENCE",
      category: "NON ALCOHOLIC PERFUME",
      price: 13,
    },
    {
      photo: "https://i.dummyjson.com/data/products/17/thumbnail.jpg",
      title: "TREE OIL 30ML",
      category: "SKINCARE",
      price: 13,
    },
    {
      photo: "https://i.dummyjson.com/data/products/20/thumbnail.jpg",
      title: "FAIR AND CLEAR",
      category: "CREAM",
      price: 13,
    },
    {
      photo: "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
      title: "ACID SERUM",
      category: "SKINCARE",
      price: 13,
    },
    {
      photo: "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
      title: "YELLOW PERFUME",
      category: "PERFUME",
      price: 13,
    },
    {
      photo: "https://images.unsplash.com/photo-1522012188892-24beb302783d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlJTIwbXVnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
      title: "coffe mug",
      category: "mug",
      price: 13,

    }
  ]
function handlechange(){


  
}
  return (

    <div>
      <Navbar></Navbar>
      <div  className="p-2 flex">
        <input placeholder="SEARCH" className="border-gray-600 rounded -md -2 mb-2"
          onchange="{handlechange}" />
      </div >

      <ProductList Products={data} />
      <Footer></Footer>



    </div>
  );
}


export default App;