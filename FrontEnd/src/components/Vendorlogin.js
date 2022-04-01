import React from 'react';
import '../vendorLogin.css';
import HomeIcon from '@material-ui/icons/Home';
import { Link} from 'react-router-dom';

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

        const url = "http://localhost:8080/loginvendor?vemail=" + vemail + "&vpassword=" + vpassword;
        fetch(url)
            .then(response => response.json())
            .then(data => 
                {
                    if(data)
                    {
                        localStorage.setItem('data1',JSON.stringify(data));
                        let sign=JSON.parse(localStorage.getItem('data1'));
                        if(sign.vstatus==="true")
                        {
                            window.location.href = '/vendor';
                        }
                        else
                        {
                            alert("You are not Approved By the Admin");
                            localStorage.removeItem("data1");
                            window.location.href = '/';
                            
                        }
                        
                    }
                    else
                    {
                     alert("Wrong ID/Password");
                     window.location.href = '/vendorlogin';
                    }
            });

    }

    render() {
        return (
            <div className='login' >
                <Link to="/">
                    <HomeIcon className='login_homeIcon' />
                </Link>
                <div className='login_container'>
                    <h1>Sign-in</h1>
                    <form>
                        <h5>Email</h5><input type='text' name="vemail" value={this.state.vemail} onChange={this.handleChange} />
                        <h5>Password</h5><input type='password' name="vpassword" value={this.state.vpassword} onChange={this.handleChange} /><br />
                        <button type="submit" onClick={this.signIn}>Sign In</button><br />
                    </form>
                    <p>By signing in you will agree all the terms & condition by SAPIENS</p>
                    <Link to="/vendorregister" ><button className='innerbutton'> Create your Vendor's Sapiens Account</button></Link>
                </div>
            </div>

        )
    }
}
export default (VendorLogin);