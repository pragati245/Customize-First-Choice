import React, { useState } from 'react';
import '../Payment.css';
import { useStateValue } from './Stateprovider';
import FinalView from './FinalView.js';
import { Link } from 'react-router-dom';
import { getBasketTotal } from './reducer';
import { Container } from 'react-bootstrap';
import Logo from '../assets/img/Logo.png';
import {useNavigate} from "react-router-dom";

function Payment() {
    const history=useNavigate();
    const [{ basket }, dispatch] = useStateValue();
    const [data, setData] = useState("");
    let sign = JSON.parse(localStorage.getItem('data1'));
    const order = async () => {
        if (sign != null) {
            console.log(sign.uid);
            if (sign.wallet < getBasketTotal(basket)) {
                alert("Insufficient Balance");
                window.location.href = "/addmoney";
            }
            else {
                let ProductsQuantity = []
                basket.map(async product => {
                    ProductsQuantity = [...ProductsQuantity, { "product_id": product.pid, "quantity": product.quantity }]
                })
                const reqData = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        address: sign.u_address,
                        o_phone: sign.u_phone,
                        u_id: sign.u_id,
                        totalprice: getBasketTotal(basket).toString(),
                        productsQuantity: ProductsQuantity
                    })
                };
                console.log(sign);
                console.log(reqData);
                await fetch(process.env.REACT_APP_BASE_URL + "/saveMyOrder", reqData)
                    .then(resp => resp.json())
                    .then(data => setData(data));
                    history('/placed')
               
            }
        }
        else {
            alert("Please Login First");
            window.location.href = "/login";
        }
    }
    return (
        <div className='payment'>
            <div className='payment_container'>
                {/*Delivery address*/}
                {/* <h1>
                    Checkout(
                        <Link to="/checkout">{basket?.length} items</Link>
                    )
                </h1> */}
                <div style={{ textAlign: "center" }}>
                    <Link to="/"><img className='login_img' src={Logo} alt='logo' /></Link>

                </div>
                <div style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }} className='mb-3'>
                    Checkout - Total Products - <Link to="/checkout" className="headerLink">{basket?.length}</Link>

                </div>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment_address'>
                        <p>{!sign ? 'Guest' : sign.ufname}</p>
                        <p>{!sign ? 'Ahmednagar' : sign.uaddress}</p>
                    </div>
                </div>
                {/*Review ITEms*/}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className='payment_items'>
                        {basket.map(item => (
                            <FinalView id={item.pid}
                                title={item.pname}
                                image={item.imageUrl ? item.imageUrl : item.pimage}
                                price={item.pprice}
                                rating={item.prating}
                            />
                        ))}
                    </div>
                </div>
                {/*Payment Method*/}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Total Amount</h3>
                        <p>{getBasketTotal(basket)}</p>
                    </div>
                    <div className='payment_details'>
                        <button onClick={order} className="addToCartBtn">Place Order</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Payment
