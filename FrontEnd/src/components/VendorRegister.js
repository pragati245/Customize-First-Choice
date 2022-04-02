import React from 'react';
import '../register.css';
import {Link ,useHistory} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
export default class VendorRegister extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            fname:"",
            lname:"",
            email:"",
            address:"",
            contactno:"",
            password:"" , 
            repassword:"",
            error:{
                fnameerr:"",
                emailerr:"",
                pwassworderr:"" , 
                repassworderr:"",
                lnameerr:"",
                address:"",
                conatctno:""
            }
        }

    }
    handleChange = (a) =>{
        const input = a.target;
        const nm = input.name;  
        const patternemail=/^[A-za-z0-9.]{5,}@[a-z0-9]{3,}\.[a-z]{3,}$/;
        const patternpwd=/^[A-Za-z@!#$%*.]{1,}[A-Za-z@!#$%*.]{2,}[A-Za-z@!#$%*.]{3,}$/;
        let val; 
        let error = this.state.error;
        if(nm==="fname")
        {
            val=input.value;
            if(val.length<5)
            {
                error.fnameerr="Too short first Name";
            }
            else
            {
                error.fnameerr="";
            }
        }
        else
        {
            if(nm==="lname")
            {
                val=input.value;
                if(val.length<5)
                {
                    error.lnameerr="Too short last Name";
                }
                else{
                    error.lnameerr="";
                }
            }
            else
            {
                if(nm==="email")
                {
                    val=input.value;
                    if(!(patternemail.test(val)))
                    {
                        error.emailerr="Invalid Email";              
                    }
                    else
                    {
                        error.emailerr ="";
                    }   
                }
                else
                {
                    if(nm==="password")
                    {
                        val=input.value;
                        if(!(patternpwd.test(val)))
                        {
                            error.passworderr="Invalid Password";
                        }
                        else
                        {  
                            error.passworderr ="";
                        }   
                    }
                    else
                    {
                        if(nm==="repassword")
                        {
                            val=input.value;
                            if(this.state.password!=val)
                            {
                                error.repassworderr="Password Not Equal";
                            }
                            else
                            {
                                error.repassworderr ="";
                            }
                        }
                        else
                        {
                            if(nm==="address")
                            {
                                val=input.value;
                                if(val.length<10)
                                {
                                    error.addresserr="Too short address";
                                }
                                else
                                {
                                    error.addresserr="";
                                }
                            }
                            else{
                                if(nm==="contactno")
                                {
                                    val=input.value;
                                    if(val.length<10)
                                    {
                                        error.contactnoerr="Invalid Number";
                                    }
                                    else
                                    {
                                        error.contactnoerr="";
                                    }
                                }
                                else{
                                    if(nm==="uniqueid")
                                    {
                                        val=input.value;
                                        if(val<100)
                                        {
                                            error.contactnoerr="Invalid UniqueIdNumber";
                                        }
                                        else
                                        {
                                            error.contactnoerr="";
                                        }       
                                    }
                                }
                            }
                        }
                    }
                }
            } 
        }
        this.setState({error,[nm]: val})

    }
   submitForm = async (e)=>{
    e.preventDefault();
    //console.log(this.state);
    const reqData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            v_name: this.state.fname,
            v_phone: this.state.contactno,
            v_address: this.state.address,
            v_email: this.state.email,
            v_password : this.state.password,
        })
    };

    await fetch(process.env.REACT_APP_BASE_URL+"/vendor/addvendor",reqData)
    .then(resp => resp.json())
    .then(data => this.setState({st: data, success: true}));
    // window.location.href="/vendorlogin";
       
    }
    render(){
    return (
        <div className='register'>
             <Link to="/">
            <HomeIcon className='register_homeIcon'/>{/*<img className='login_img' src={logo} alt='logo'/>*/}
            </Link>
            <div className='register_container'>
                <h1>Sign-up</h1>
                <form >
                    {/* <h5>Unique Id</h5><input type='number' name="uniqueid" value={this.state.uniqueid} onChange={this.handleChange}/><br/> */}
                    <h5>First Name</h5><input type='text' name="fname" value={this.state.fname} onChange={this.handleChange}/><br/>
                    <h5>Email</h5><input type='text' name="email" value={this.state.email} onChange={this.handleChange}/><br/>
                    <h5>Address</h5><input type='text' name="address" value={this.state.address} onChange={this.handleChange}/><br/>
                    <h5>Contact Number</h5><input type='number'name="contactno" value={this.state.contactno} onChange={this.handleChange}/><br/>
                    <h5>Password</h5><input type='password' name="password" value={this.state.password} onChange={this.handleChange}/><br/>
                    <h5>Retype-Password</h5><input type='password' name="repassword" value={this.state.repassword} onChange={this.handleChange}/><br/>
                    <Link to="/vendorlogin" > <button className='innerbutton' type="submit" value="Submit" onClick={this.submitForm}>Sign Up</button></Link><br/>
                </form>
                <span>{this.state.error.emailerr}{this.state.error.fnameerr}{this.state.error.lnameerr}{this.state.error.addresserr}<br/>
                {this.state.error.pwderr}{this.state.error.contactnoerr}</span>
            </div>
        </div>
        
    )
}
}