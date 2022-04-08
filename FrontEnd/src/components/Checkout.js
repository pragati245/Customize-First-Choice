import React from 'react'
import '../Checkout.css';
import Subtotal from './Subtotal';
import {useStateValue} from './Stateprovider';
import CheckoutProduct from './CheckoutProduct.js';

function Checkout() {
  const [{ basket }] = useStateValue()
  let sign = JSON.parse(localStorage.getItem('data1'))
  return (
    <div className="checkout">
      <div className="checkout_left">
        {/* <img className='checkout_ad' src={baner} alter="baner"/> */}
        <div>
          <h3 style={{ textAlign: 'center' }}>
            {' '}
            Hello {!sign ? 'User' : sign.ufname}
          </h3>
          <h4 className="checkout_title">Your Shopping Basket</h4>
          {/*CheckOutProduct*/}
          {basket.map((item) => (
            <CheckoutProduct
              id={item.pid}
              title={item.pname}
              image={item.imageUrl ? item.imageUrl : item.pimage}
              price={item.pprice}
              rating={item.prating}
              quantity={item.quantity}
              p_qty={item.p_qty}
              c_type={item.c_type}
              c_name={item.c_name}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
