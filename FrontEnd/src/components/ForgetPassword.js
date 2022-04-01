import React from 'react';
import '../Login.css';
import HomeIcon from '@material-ui/icons/Home';
import { Link} from 'react-router-dom';
function ForgetPassword() {
    let textInput1=React.createRef();
    
    const proceed= ()=>{
        localStorage.setItem('text1',textInput1.current.value);
        const number=JSON.parse(localStorage.getItem('text1'));
        const url = "http://localhost:8080/forgotpwdcust?ucontactno="+number;
        fetch(url)
                .then(response => response.json())
                .then(data => 
                    {
                        console.log(data);
                        if (data)
                        {
                            localStorage.setItem('data2',JSON.stringify(data));
                            console.log(localStorage.getItem('data2'));
                            localStorage.removeItem("text1");
                            window.location.href = '/reset';
                        }
                        else
                        {
                            alert("Wrong Contact Number");
                            window.location.href = '/login';
                        }
                    });
       } 
    return (
        
        <div className='login'>
            <Link to="/">
            <HomeIcon className='login_homeIcon'/>
            </Link>
            <div className='login_container'>
                <h5>Enter Your Contact Number</h5>
                <form>
                <input ref={textInput1} type="text" /><br/>
                <button type="submit" onClick={proceed}>Proceed</button><br/>
                </form>
                </div>
            </div>
    )
}
export default ForgetPassword;