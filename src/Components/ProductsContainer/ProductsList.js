import React,{ useEffect, useState } from 'react';
import { useDispatch }  from 'react-redux';
import { getProductsAction } from '../../Redux/Action/getProducts-Action';
import ToolsProduct from './ToolsProduct';
import HealthProducts from './HealthProducts';
import HeavyProducts from './HeavyProducts';

export default function ProductsList() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        getProducts()
    },[])

    const getProducts = () => {
        try {
        setLoading(true);
        fetch('https://fakestoreapi.com/products?limit=20')
                            .then((res) => res.json())
                            .then((data) =>{
                                try {
                                    setLoading(true)
                                    console.log('the products datas are: ', data)
                                    dispatch(getProductsAction(data))
                                    setLoading(false);
                                } catch (error) {
                                    console.log('server error', error)
                                }
                               
                            })
                          
                            
                                
        } catch (error) {
            console.log('there is an error', error)
            
        }

       
                            
    }

    return (
       <>
            <div className="col-lg-8 mx-auto"> 
            {
                loading ? <h3>Loading...</h3> :
                <div className="product_list">
                     <ToolsProduct />
                    <HealthProducts />
                    <HeavyProducts />
                </div>
            }
                
            </div>
       </>
    )
}
