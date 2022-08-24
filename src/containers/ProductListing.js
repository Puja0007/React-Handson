import React,{useEffect}from 'react';
import ProductComponent from './ProductComponent';
import {useSelector,useDispatch} from 'react-redux';
import axios from 'axios';
import {setProducts} from './redux/actions/productActions';

const ProductListing = ()=>{

    const products = useSelector((state)=>state.allProducts.products);
    const dispatch = useDispatch();
   const fetchProduct = async ()=>{
    const response = await axios.get('https://dummyjson.com/products').catch((err)=>{
        console.error(err);
    })
console.log(response.data.products);
dispatch(setProducts(response.data.products))
   }
   useEffect(()=>{
      fetchProduct(); 
   },[])
    console.log(products);
    return(
        <div>
            <h1>Product Listing</h1>
        <ProductComponent/>
        </div>
    )
}

export default ProductListing;