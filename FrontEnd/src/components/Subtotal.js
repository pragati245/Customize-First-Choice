import React from 'react';
import '../Subtotal.css';
import CurrencyFormat from "react-currency-format";
import {useStateValue} from './Stateprovider';
import { getBasketTotal } from './reducer';
import {useNavigate} from "react-router-dom";

export default function Subtotal() {
    const history=useNavigate();

    const [{basket}]=useStateValue();
    
    return (
        <div className='subtotal'>
           <CurrencyFormat
            renderText={(value)=>(
                <>
                    <p>
                        Subtotal({basket.length} items):
                        <strong>{value}</strong>
                    </p>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Rs "}
            />
            <button onClick={e=>history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}
