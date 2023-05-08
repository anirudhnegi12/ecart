import React from 'react';
import Product from './Product';


function Productlist({Products}){

  return (
<div>
<div >
  {
    Products.map(function(item){
  return<Product
          title={item.title} 
          category={item.category} 
          photo={item.photo} 
          pricec={item.price}/>
}
               )
  }
 </div>
   
    </div>
  );
}
  export default Productlist;
     
      