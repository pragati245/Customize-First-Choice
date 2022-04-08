import React from 'react'
import '../register.css';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import { Container } from 'react-bootstrap';
import Logo from '../assets/img/Logo.png';

export default class ViewOrderbyuid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sign: JSON.parse(localStorage.getItem('data1')),
        }
    }
    render() {
        const to1 = this.state.sign;
        return (
            <Container>
                <div style={{ textAlign: "center" }}>
                    <Link to="/viewproducts" >
                        <img className='login_img' src={Logo} alt='logo' />
                    </Link>
                </div>
                {to1 != null
                    ?
                    <div className='register'>
                        <div className='register_container'>
                            <h2>Admin Wallet</h2><br />
                            <form >
                                <h5>Amount in wallet : {this.state.sign.a_wallet}</h5><br />

                            </form>
                        </div>
                    </div>

                    : < div style={{ textAlign: "center", color: "black" }}><h2>No Data</h2></div>
                }
            </Container>
        );
    }
}