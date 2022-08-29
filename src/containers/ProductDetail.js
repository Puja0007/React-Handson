import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import {selectProduct, removeSelectedProduct} from './redux/actions/productActions';


const ProductDetail = ()=>{
    const { productId } = useParams();
    const productDetails = useSelector((state)=>state.selectedProduct.product)
    console.log(productDetails);
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
        if(productId && productId !==""){
            fetchProductDetails();
        }
        return ()=>{
            dispatch(removeSelectedProduct());
        };
    } ,[productId]);
    
   
    return(
        <div className="ui grid container">
            {Object.keys(productDetails).length === 0 ? (
                <div>Loading...</div>

            ):(
                <div className="ui placeholder segment">
                    <div className="ui two column very relaxed stackable grid">
                        <div className="ui vertical divider">
                            AND
                        </div>
                        <div className="middle aligned row">
                            <div className="column lp">
                                <img className="ui fluid image" src={productDetails.images[0]}/>
                            </div>
                        </div>
                        </div>

                </div>
            )}
        </div>
    )
}

export default ProductDetail;
