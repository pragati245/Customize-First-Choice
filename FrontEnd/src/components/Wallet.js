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
            walletBalance: null
        }
    }
    submitForm = () => {
        window.location.href = "/";
    }
    componentDidMount = async () => {
        if(localStorage.getItem('data1') && this.state.sign!== undefined && this.state.sign.u_id !== undefined ){
        await fetch(process.env.REACT_APP_BASE_URL + "/user/" + this.state.sign.u_id)
            .then(resp => resp.json())
            .then(data => {
                let sign = JSON.parse(localStorage.getItem('data1'))
                sign.wallet = data.wallet
                localStorage.setItem('data1', JSON.stringify(sign));
                this.setState({ walletBalance: data.wallet })
            });
        }
    }
    render() {
        const to1 = this.state.sign;
        return (
            <Container className='login'>
                <div style={{ textAlign: "center" }}>
                    <Link to="/" >
                        <img className='login_img' src={Logo} alt='logo' />
                    </Link>
                </div>
                {to1 != null
                    ?
                    <div className='register'>
                        <div className='register_container'>
                            <h2>User Wallet</h2><br />
                            <form >
                                <h5>Amount in wallet : {this.state.walletBalance}</h5><br />
                                <Link to="/addmoney"><button className='innerbutton' type="submit" value="Submit"/* onClick={this.submitForm}*/>Add Amount</button></Link><br />
                            </form>
                        </div>
                    </div>

                    : < div style={{ textAlign: "center", color: "black" }}><h2>Please Login</h2></div>
                }
            </Container>
        );
    }
}