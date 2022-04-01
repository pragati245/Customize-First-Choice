import React from 'react';
import '../Product.css';
import {useStateValue} from './Stateprovider';

function Product({id,title,describe,size,brand,price,image,rating}) {
    const [{basket},dispatch]=useStateValue();
    //console.log("this is basket" ,basket);
    //let x=10;
    const addToBasket=() =>{
        //dispatch item in data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                pid:id,
                pname:title,
                pdesc:describe,
                psize:size,
                pbrand:brand,
                pimage:image,
                pprice:price,
                prating:rating,
            },
        });
    };
    return (
        <div className='product'>
            <img className='product_img' src={image} alt="productImg"/>
            <div className='product_info'>
               {/* <p>{title}</p>
               <p>{x}</p>*/}
                <p>{describe}</p>
                <p>{size}</p>
                <p>{brand}</p>
                <p className='product_price'>
                    <small>Rs</small>
                    <strong>{price}</strong>
                </p>
                
                <div className='product_rating'>
                    {Array(rating).fill().map((_,i)=>(<p>⭐</p>))}                    
                </div>
            </div>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
