import React from 'react'
import '../Checkout.css';
import baner from '../Ad.png';
import Subtotal from './Subtotal';
import {useStateValue} from './Stateprovider';
import CheckoutProduct from './CheckoutProduct.js';

function Checkout() {
    const [{basket}]=useStateValue();
    let sign=JSON.parse(localStorage.getItem('data1'));
    return (
        <div className="checkout">
            <div className='checkout_left'>
                <img className='checkout_ad' src={baner} alter="baner"/>
                <div>
                    <h3> Hello {!sign ?'User':sign.ufname}</h3>
                    <h4 className='checkout_title'>Your Shopping Basket</h4>
                    {/*CheckOutProduct*/}
                    {basket.map(item=>(
                        <CheckoutProduct
                        id={item.id}
                        title={item.pname}
                        image={item.pimage}
                        price={item.pprice}
                        rating={item.prating}/>
                    ))}
                </div>
            </div>
            <div className='checkout_right'>
                <Subtotal />
               
            </div>
        </div>
    )
}

export default Checkout
