import React from 'react';
import '../vendorLogin.css';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import { Form } from "react-bootstrap";
import Logo from '../assets/img/Logo.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

class VendorLogin extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            msg: "",
            vemail: "",
            vpassword: ""
        }
    }

    handleChange = (e) => {
        const input = e.target;
        const nm = input.name;
        const val = input.value;
        this.setState({ [nm]: val });
    }

    signIn = (e) => {
        let vemail = this.state.vemail;
        let vpassword = this.state.vpassword;

        // const url = process.env.REACT_APP_BASE_URL + "/loginvendor?v_email=" + vemail + "&v_password=" + vpassword;
        const url = process.env.REACT_APP_BASE_URL + "/vendor/loginvendor";
        let data = {
            "v_email": vemail,
            "v_password": vpassword
        }
        // etch('https://example.com/profile', {
        //     method: 'POST', // or 'PUT'
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log('Success:', data);
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });

        fetch(url,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(data)
            }
        ).then(response => response.json())
            .then(data => {
                if (data) {
                    localStorage.setItem('data1', JSON.stringify(data));
                    let sign = JSON.parse(localStorage.getItem('data1'));
                    if (sign.v_status) {
                        window.location.href = '/vendor';
                    }
                    else {
                        alert("You are not Approved By the Admin");
                        localStorage.removeItem("data1");
                        window.location.href = '/';

                    }

                }
                else {
                    alert("Wrong ID/Password");
                    window.location.href = '/vendorlogin';
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert(error);
            });

    }

    render() {
        return (
            <div className='login' >
                <Link to="/">
                    {/* <HomeIcon className='login_homeIcon' /> */}
                    <img className='login_img' src={Logo} alt='logo' />
                </Link>
                <div className='login_container'>
                    <h1>Vendor Sign-in</h1>
                    {/* <form>
                        <h5>Email</h5><input type='text' name="vemail" value={this.state.vemail} onChange={this.handleChange} />
                        <h5>Password</h5><input type='password' name="vpassword" value={this.state.vpassword} onChange={this.handleChange} /><br />
                        <button type="submit" onClick={this.signIn}>Sign In</button><br />
                    </form> */}
                    <Form.Group className="mb-2">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='text' name="vemail" value={this.state.vemail} onChange={this.handleChange} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' name="vpassword" value={this.state.vpassword} onChange={this.handleChange} />
                    </Form.Group>
                    <p>By signing in you will agree all the terms & condition by SAPIENS</p>
                    <button type="submit" className='innerbutton' onClick={this.signIn}>Sign In</button><br />
                    <Link to="/vendorregister" ><button className='innerbutton'> Create your Vendor's First Choice Account</button></Link>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Link to="/login" ><button className='innerbutton'><ArrowBackIcon/>Back</button></Link><br />
                    </Form.Group>
                </div>
            </div>

        )
    }
}
export default (VendorLogin);