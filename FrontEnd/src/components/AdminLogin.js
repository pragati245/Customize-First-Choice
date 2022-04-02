import React from 'react';
import '../Login.css';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import { Form } from "react-bootstrap";
import Logo from '../assets/img/Logo.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

class AdminLogin extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            msg: "",
            adminid: "",
            apassword: ""
        }
    }

    handleChange = (e) => {
        const input = e.target;
        const nm = input.name;
        const val = input.value;
        this.setState({ [nm]: val });
    }

    signIn = async (e) => {
        e.preventDefault();
        let adminid = this.state.adminid;
        let apassword = this.state.apassword;

        const url = process.env.REACT_APP_BASE_URL + "/admin/adminlogin"
        let data = {
            "a_email": adminid,
            "a_password": apassword
        }
        await fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                if (data != null) {
                    localStorage.setItem('data1', JSON.stringify(data));
                    window.location.href = '/viewproducts';
                }
                else {
                    alert("Wrong ID/Password");
                    window.location.href = '/adminlogin';
                }
            });

    }

    render() {
        return (
            <div className='login'>
                <Link to="/">
                    {/* <HomeIcon className='login_homeIcon'/> */}
                    <img className='login_img' src={Logo} alt='logo' />
                </Link>
                <div className='login_container'>
                    <h1>Sign-in</h1>
                    <form>
                        {/* <h5>Admin ID</h5><input type='number' name="adminid" value={this.state.adminid}  onChange={this.handleChange}/>
                    <h5>Password</h5><input type='password' name="apassword" value={this.state.apassword}  onChange={this.handleChange}/><br/> */}
                        <Form.Group className="mb-2">
                            <Form.Label>Admin</Form.Label>
                            <Form.Control type='email' name="adminid" value={this.state.adminid} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' name="apassword" value={this.state.apassword} onChange={this.handleChange} />
                        </Form.Group>
                        <button className='innerbutton' onClick={this.signIn}>Sign In</button><br />
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Link to="/login" ><button className='innerbutton'><ArrowBackIcon/>Back</button></Link><br />
                        </Form.Group>
                    </form>
                </div>
            </div>

        )
    }
}

export default (AdminLogin);
