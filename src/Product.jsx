import React from 'react';


function Product (data){
  return(
    
    
    <div class="px-9 w-5  border-solid border-2 border-sky-500" >
      
     <div class=" flex md:grid-cols-3 gap-4 space-y-2 mx-auto">
       <div class=" pb-4 overflow-hidden shadow shadow-xl shadow-gray-600">
         <div  class="  w-full aspect-square">
   <img class="w-full h-full object-cover" src={data.photo}/>
       </div>
<div class="text-gray-600 ml-3 text-xl sm:text-2xl font-bold" >{data.category} </div>
       
     <div class="sm:text-xl ml-3" >{data.title}</div>
        <div  class="sm:text-xl font-bold ml-3">{data.price}</div>
</div>
    </div>
    </div>)
}

export default Product;


