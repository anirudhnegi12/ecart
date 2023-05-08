import React from 'react';


function Product(data) {
  return (


    <div>

      <div>
        <div>
          <div>
            <img className="w-40 h-40" src={data.photo} />
          </div>
          <div >{data.category} </div>

          <div>{data.title}</div>
          <div>{data.price}</div>
        </div>
      </div>
    </div>)
}

export default Product;


