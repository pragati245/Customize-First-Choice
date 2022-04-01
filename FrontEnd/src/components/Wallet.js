import React from 'react'
import '../register.css';
import {Link} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

export default class ViewOrderbyuid extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            sign:JSON.parse(localStorage.getItem('data1')),
        }
    }
    submitForm = () => {
        window.location.href="/";
        }
    render()
    {
        const to1= this.state.sign;
     return (
        <div>
            <div style={{textAlign:"center"}}>
              <Link to="/" >
              <HomeIcon className='header_homeIcon' /> 
            </Link>
            </div>
           {to1!=null
           ? 
                         <div className='register'>
                         <div className='register_container'>
                             <h2>Wallet</h2><br/>
                             <form >
                                 <h5>Amount in wallet : {this.state.sign.uwallet}</h5><br/>
                                 <Link to="/addmoney"><button className='innerbutton' type="submit" value="Submit"/* onClick={this.submitForm}*/>Add Amount</button></Link><br />
                             </form>
                         </div>
                     </div>
              
        : < div style={{textAlign:"center",color:"black"}}><h2>No Data</h2></div> 
      }
      </div>
    );
    }
}