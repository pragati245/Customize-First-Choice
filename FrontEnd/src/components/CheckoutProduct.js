import React from 'react';
import '../CheckoutProduct.css';
import { useStateValue } from './Stateprovider';

function CheckoutProduct({ id, title, price, image, rating ,quantity,p_qty}) {
    const [{ basket }, dispatch] = useStateValue();
    console.log(basket)
    const removeFromBasket = (id) => {
        console.log(id)
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    const minusQuantity = (e,id) => {
        e.stopPropagation()
        dispatch({
            type: 'MINUS_QUANTITY',
            id: id,
        })
    }
    const addQuantity = (e,id) => {
        e.stopPropagation()
        dispatch({
            type: 'ADD_QUANTITY',
            id: id,
        })
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_image' src={image} alt='' />
            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{title}</p>
                <p className='checkoutProduct_price'>
                    <strong>₹{price}</strong>
                </p>
                <p className='checkoutProduct_rating'>
                    {Array(rating).fill().map((_, i) => (<p key={i}>⭐</p>))}
                </p>
                <p className=''>
                   Total stock in inventory - {p_qty}
                </p>
                <div className="number">
                    <span className="minus" onClick={(e)=>minusQuantity(e,id)}>-</span>
                    <input disabled={ true} type="text" className="quantityInput mr-1 ml-1" value={quantity} />
                    <span className="plus" onClick={(e)=>addQuantity(e,id)}>+</span>
                </div>
                <button onClick={()=>removeFromBasket(id)} className="addToCartBtn mt-2">X Remove from cart</button>
            </div>

        </div>
    )
}

export default CheckoutProduct
