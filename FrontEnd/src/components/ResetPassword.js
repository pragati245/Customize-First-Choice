import React from 'react';
import '../Login.css';
import HomeIcon from '@material-ui/icons/Home';
import { Link} from 'react-router-dom';
function ForgetPassword() {

    let textInput1=React.createRef();   
    let textInput2=React.createRef();
    const reset=()=>{
        localStorage.setItem('text2',textInput1.current.value);
        const pwd=JSON.parse(localStorage.getItem('text2'));
        localStorage.setItem('text3',textInput2.current.value);
        const pwd1=JSON.parse(localStorage.getItem('text3'));
        if(pwd!=pwd1)
        {
            alert("Password Don't Match");
        }
        const sign=JSON.parse(localStorage.getItem('data2'));
        //console.log(sign,pwd);
        const url = "http://localhost:8080/resetpwd?uid="+sign.uid+"&newpwd="+pwd;
        //alert(url);
        fetch(url)
                .then(response => response.json())
                .then(data => 
                    {
                        console.log(data);
                });
                localStorage.removeItem('text2');
                localStorage.removeItem('text3');
                localStorage.removeItem('data2');
                alert("Password Updated Successfully");
                window.location.href = '/';
    }
    return (
        
        <div className='login'>
            <Link to="/">
            <HomeIcon className='login_homeIcon'/>
            </Link>
            <div className='login_container'>
                <h3 style={{textAlign:'center'}}>Reset Password</h3>
                <form>
                <h5>Enter New Password</h5>
                <input ref={textInput1} type="password" /><br/>
                <h5>Reenter New Password</h5>
                <input ref={textInput2} type="password" /><br/>
                <button type="submit" onClick={reset}>Reset</button><br/>
                </form>
                </div>
            </div>
    )
}
export default ForgetPassword;