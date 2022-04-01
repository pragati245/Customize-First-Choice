import React from 'react';
import '../Login.css';
import HomeIcon from '@material-ui/icons/Home';
import {Link } from 'react-router-dom';



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

   signIn =(e)=>{
    let adminid = this.state.adminid;
    let apassword = this.state.apassword;

    const url = "http://localhost:8080/loginadmin?adminid=" + adminid + "&apassword=" + apassword;
    fetch(url)
            .then(response => response.json())
            .then(data => 
                {
                    if(data!=null)
                    {
                        localStorage.setItem('data1',JSON.stringify(data));
                        window.location.href = '/admin';
                    }
                    else
                    {
                     alert("Wrong ID/Password");
                     window.location.href = '/adminlogin';
                    }
            });

   }
    
   render(){
    return (
        <div className='login'>
            <Link to="/">
            <HomeIcon className='login_homeIcon'/>
            </Link>
            <div className='login_container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>Admin ID</h5><input type='number' name="adminid" value={this.state.adminid}  onChange={this.handleChange}/>
                    <h5>Password</h5><input type='password' name="apassword" value={this.state.apassword}  onChange={this.handleChange}/><br/>
                    <button type="submit" onClick={this.signIn}>Sign In</button><br/>
                </form>                
            </div>
        </div>
        
    )
   }
}

export default (AdminLogin);
