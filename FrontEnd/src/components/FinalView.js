import React from 'react';
import '../CheckoutProduct.css';
//import {useStateValue} from './Stateprovider';

function FinalView({id,title,price,image,rating}) {
    //const [{basket,user},dispatch]=useStateValue();
    
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_image' src={image} alt=''/>
            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{title}</p>
                <p className='checkoutProduct_price'>
                    <small>Rs</small>
                    <strong>{price}</strong>
                </p>
                <p className='checkoutProduct_rating'>
                    {Array(rating).fill().map((_,i)=>(<p>⭐</p>))}
                </p>
              { /*<button onClick={removeFromBasket}>Remove from cart</button>*/}
            </div>
           
        </div>
    )
}

export default FinalView
