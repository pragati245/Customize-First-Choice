import React, { useState } from 'react';
import '../Login.css';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import { Form } from "react-bootstrap";
import Logo from '../assets/img/Logo.png';
import { useNavigate } from "react-router-dom";

function LoginIn() {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    const [isError, setIsError] = useState(false);

    const { email, password } = inputs;
    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    const signIn = async (e) => {
        setIsError(false)
        e.preventDefault();
        const reqData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                u_email: email,
                u_password: password,
            })
        };
        const url = process.env.REACT_APP_BASE_URL + "/user/loginuser";

        await fetch(url, reqData)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    localStorage.setItem('data1', JSON.stringify(data));
                    history('/')
                }
                else {
                    alert("Wrong ID/Password");
                    history('/login')
                }
            }).catch((error) => {
                console.log(error);
                setIsError(true)
            })
    }
    return (
        <div className='login'>
            <Link to="/">
                {/* <HomeIcon className='login_homeIcon' /> */}
                <img className='login_img' src={Logo} alt='logo' />
            </Link>
            <div className='login_container'>
                <h1>User Sign-in</h1>
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
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" name="password" value={password} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="By signing in you will agree all the terms & condition by FIRST CHOICE" />
                    </Form.Group>
                    <button className='innerbutton' type="submit" onClick={(e) => signIn(e)}>Sign In</button><br />
                    {isError &&
                        <Form.Text style={{ color: 'red' }}>
                            Incorrect Email and Password
                        </Form.Text>
                    }
                </form><br />
                <Link to="/forgetpass"><p /*onClick={()=> window.location.href = '/forgetpass'}*/ style={{ textAlign: 'center' }}>Forget Password</p></Link>

                <Link to="/register" ><button className='innerbutton'> Create Account</button></Link>
                <Link to="/vendorlogin" ><button className='innerbutton mt-3'> Vendor Login</button></Link>
                <Link to="/adminlogin" ><button className='innerbutton mt-3'> Admin Login</button></Link>
            </div>
        </div>

    )

}
export default LoginIn;
