import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import {selectProduct} from './redux/actions/productActions';


const ProductDetail = ()=>{
    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log(productId);
    const fetchProductDetails = async ()=>{
        const productDetails = await axios.get(`https://dummyjson.com/products/${productId}`).catch((err)=>{
            console.error(err);
        })

        console.log(productDetails.data);
        dispatch(selectProduct(productDetails.data));
        
    }
    useEffect(()=>{
        fetchProductDetails();
    },[])
    return(
        <>
            <h1>Product Detail</h1>
        </>
    )
}

export default ProductDetail;
