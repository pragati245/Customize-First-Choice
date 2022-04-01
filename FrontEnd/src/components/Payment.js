import React ,{useState} from 'react';
import '../Payment.css';
import {useStateValue} from './Stateprovider';
import FinalView from './FinalView.js';
import {Link} from 'react-router-dom';
import { getBasketTotal } from './reducer';

function Payment() 
{
    const [{basket},dispatch]=useStateValue();
    const [data,setData]=useState("");
    let sign=JSON.parse(localStorage.getItem('data1'));
    const order= ()=>
    {
        if(sign!=null)
        {
        console.log(sign.uid);
        if(sign.uwallet<getBasketTotal(basket))
        {
            alert("Insufficient Balance");
            window.location.href="/addmoney";
        }
        else{
        const reqData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uid:sign.uid,
                uname:sign.ufname,
                contactno:sign.ucontactno,
                address:sign.uaddress,
                totalprice:getBasketTotal(basket),
                qty:basket.length,
                products:basket
            })
        };
        console.log(sign);
        console.log(reqData);
        fetch("http://localhost:8080/saveMyOrder",reqData)
        .then(resp => resp.json())
        .then(data => setData(data));
        window.location.href="/placed";
        console.log(data);
    }
    }
    else{
        alert("Please Login First");
            window.location.href="/login";
    }
    }   
     return (
        <div className='payment'>
            <div className='payment_container'>
                {/*Delivery address*/}
                <h1>
                    Checkout(
                        <Link to="/checkout">{basket?.length} items</Link>
                    )
                </h1>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment_address'>
                        <p>{!sign ?'Guest':sign.ufname}</p>
                        <p>{!sign?'Ahmednagar':sign.uaddress}</p>
                    </div>
                </div>
                {/*Review ITEms*/}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className='payment_items'>
                        {basket.map(item=>(
                            <FinalView id={item.pid}
                            title={item.pname}
                            image={item.pimage}
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
                        <button onClick={order}>Place Order</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Payment
