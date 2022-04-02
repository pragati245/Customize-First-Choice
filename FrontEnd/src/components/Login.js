import React, { useState } from 'react';
import '../Login.css';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import {  Form } from "react-bootstrap";
import Logo from '../assets/img/Logo.png';

function LoginIn() {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    const { email, password } = inputs;
    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    const signIn = () => {

        const url = process.env.REACT_APP_BASE_URL+"/logincustomer?uemail=" + email + "&upassword=" + password;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    localStorage.setItem('data1', JSON.stringify(data));
                    window.location.href = '/';
                }
                else {
                    alert("Wrong ID/Password");
                    window.location.href = '/login';
                }
            });
    }
    return (
        <div className='login'>
            <Link to="/">
                {/* <HomeIcon className='login_homeIcon' /> */}
                <img className='login_img' src={Logo} alt='logo'/>
            </Link>
            <div className='login_container'>
                <h1>Sign-in</h1>
                <form>
                    {/* <h5>Email</h5>
                    <input type='text' name="email" value={email} onChange={handleChange} />
                    <h5>Password</h5>
                    <input type='password' name="password" value={password} onChange={handleChange} /><br /> */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={handleChange} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" name="password" value={password} onChange={handleChange} />
                    </Form.Group>
                    <button className='innerbutton' type="submit" onClick={signIn}>Sign In</button><br />
                </form><br />
                <Link to="/forgetpass"><p /*onClick={()=> window.location.href = '/forgetpass'}*/ style={{ textAlign: 'center' }}>Forget Password</p></Link>
                <p>By signing in you will agree all the terms & condition by SAPIENS</p>
                <Link to="/register" ><button className='innerbutton'> Create your Sapiens Account</button></Link>
                <Link to="/vendorlogin" ><button className='innerbutton mt-3'> Vendor Login</button></Link>
                <Link to="/adminlogin" ><button className='innerbutton mt-3'> Admin Login</button></Link>
            </div>
        </div>

    )

}
export default LoginIn;
