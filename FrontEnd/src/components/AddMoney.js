import React from 'react';
import '../register.css';
import { Link } from 'react-router-dom';
import 'react-dropdown/style.css';
import HomeIcon from '@material-ui/icons/Home';

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
        const url = process.env.REACT_APP_BASE_URL+"/addmoneytowallet?uid=" + this.state.sign.uid + "&amount=" + this.state.cname;
        fetch(url)
                .then(response => response.json())
                .then(data => 
                    {
                    
                            console.log(data);       
                });
                window.location.href="/";

    }
    render() {
        return (
            <div className='register'>
                <div style={{textAlign:"center"}}>
              <Link to="/" >
              <HomeIcon className='header_homeIcon' /> 
            </Link>
            </div>
                <div className='register_container'>
                    <h2>Add Amount</h2><br/>
                    <form >
                        <h5>Add Amount</h5><input type="number" name="cname" value={this.state.cname} onChange={this.handleChange1} /><br />
                        <Link to="/login"> <button className='innerbutton' type="submit" value="Submit" onClick={this.submitForm}>Ok</button></Link><br />
                    </form>
                </div>
            </div>

        )
    }
}