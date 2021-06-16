import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Product.scss';


export default function WomenProducts() {
    const {allProducts} = useSelector(state => state.productReducer);
   
    return (
        <>
              <h2 style={{marginTop:"3rem"}}>Women's clothes:</h2>

        {
            allProducts === false ? <h3>Couldn't able to get data from source</h3> : 
            <div className="products">
              
                {
                    allProducts.map((item)=>{
                            return  (item.category === "women's clothing" ?
                                    <div className="card product_wrapper" key={item.id}>
                                        <img src={item.image} className="card-img-top" alt="men's-product" />
                                        <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text price_text">${item.price}</p>
                                        {/* <p className="card-text">{item.description}</p> */}
                                        <a href="#" className="btn btn-primary">Add to cart</a>
                                        </div>
                                    </div>

                                : null)
                            
                    })
                }
            
            </div>
        }
           
        </>
    )
}