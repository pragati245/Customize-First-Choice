import React from 'react';
import '../register.css';
import { Link } from 'react-router-dom';
import 'react-dropdown/style.css';
import HomeIcon from '@material-ui/icons/Home';
import { Container, Form } from 'react-bootstrap';
import Logo from '../assets/img/Logo.png';

export default class AddMoney extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cname: "",
            sign: JSON.parse(localStorage.getItem('data1')),
        }
    }
    handleChange1 = (a) => {
        this.setState({ cname: a.target.value });
        console.log(this.state.cname);

    }
    submitForm = (e) => {
        const url = process.env.REACT_APP_BASE_URL + "/addmoneytowallet?uid=" + this.state.sign.u_id + "&amount=" + this.state.cname;
        fetch(url)
            .then(response => response.json())
            .then(data => {

                console.log(data);
            });
        window.location.href = "/";

    }
    render() {
        return (
            <Container>
                <div className='register'>
                    <div style={{ textAlign: "center" }}>
                        <Link to="/" >
                            <img className='login_img' src={Logo} alt='logo' />
                        </Link>
                    </div>
                    <div className='register_container'>
                        <form >
                            <h5>Add Amount</h5>
                            {/* <input type="number" name="cname" value={this.state.cname} onChange={this.handleChange1} /> */}
                            <Form.Group className="mb-2 mt-3" controlId="formBasicEmail">
                                <Form.Label>Enter Amount</Form.Label>
                                <Form.Control type="number" name="cname" value={this.state.cname} onChange={this.handleChange1}  />
                            </Form.Group>
                            <br />
                            <Link to="/login"> <button className='innerbutton' type="submit" value="Submit" onClick={this.submitForm}>Ok</button></Link><br />
                        </form>
                    </div>
                </div>
            </Container>
        )
    }
}