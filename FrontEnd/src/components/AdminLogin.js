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
            apassword: "",
            isError: false,
            isFormValid: false,
            inputElements: {
                email: {
                    validation: {
                        required: true,
                        isEmail: true,
                    },
                    valid: false,
                    touched: false,
                    invalidText: "Invalid Email",
                },
            }
        }
    }
    checkValidity = (value, rules) => {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== "" && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        if (rules.isEmail) {
            const pattern =
                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid;
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid;
        }

        return isValid;
    }
    handleChange = (e) => {
        this.setState({ isError: false })
        const input = e.target;
        const nm = input.name;
        const val = input.value;
        this.setState({ [nm]: val });
        if (e.target.name === "adminid") {
            if (this.checkValidity(e.target.value, this.state.inputElements.email.validation)) {
                this.setState({ inputElements: { ...this.state.inputElements, email: { ...this.state.inputElements.email, touched: true, valid: true } } })
            }
            else {
                this.setState({ inputElements: { ...this.state.inputElements, email: { ...this.state.inputElements.email, touched: true, valid: false } } })
            }
            let formIsValid = true;
            for (let inputIdentifier in this.state.inputElements) {
                formIsValid = this.state.inputElements[inputIdentifier].valid && formIsValid;
            }
            this.setState({ isFormValid: formIsValid })
            console.log(this.state.inputElements)
        }
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
            }).catch((error) => {
                console.log(error);
                this.setState({ isError: true })
            })

    }

    render() {
        return (
            <div className='login'>
                <Link to="/">
                    {/* <HomeIcon className='login_homeIcon'/> */}
                    <img className='login_img' src={Logo} alt='logo' />
                </Link>
                <div className='login_container'>
                    <h1>Admin Sign-in</h1>
                    <form>
                        <Form.Group className="mb-2">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' name="adminid" value={this.state.adminid} onChange={this.handleChange} />

                            {(!this.state.inputElements.email.valid && this.state.inputElements.email.touched) && <div style={{ color: "red" }}> {this.state.inputElements.email.invalidText}</div>}
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' name="apassword" value={this.state.apassword} onChange={this.handleChange} />
                        </Form.Group>
                        {this.state.isError &&
                            <Form.Text style={{ color: 'red' }}>
                                Incorrect Email and Password
                            </Form.Text>
                        }
                        <button disabled={!this.state.isFormValid} className={this.state.isFormValid ? 'innerbutton' : "inactivebtn"} onClick={this.signIn}>Sign In</button><br />
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Link to="/login" ><button className='innerbutton'><ArrowBackIcon />Back</button></Link><br />
                        </Form.Group>
                    </form>
                </div>
            </div>

        )
    }
}

export default (AdminLogin);
