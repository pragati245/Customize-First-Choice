import React  from 'react';
import '../adminheader.css';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom';

function AdminHeader() 
{
    console.log(JSON.parse(localStorage.getItem('data1')));
    let sign=JSON.parse(localStorage.getItem('data1'));
    let signOut= ()=>{
        if(sign!=null)
        {
            localStorage.removeItem('data1');
            window.location.href = '/adminlogin';
        }
    }
    console.log(sign);
    return (
        
        <div className='aheader'>
            <Link to="/admin">
              <HomeIcon className='aheader_homeIcon'/>
            </Link>
            <p className="aheader_value">Admin</p>
            <div className='aheader_category'>
            <Link to="/addcategory">
              <div className='aheader_category1'>Add Category</div>
            </Link>
            <Link to="/viewproducts">
              <div className='aheader_category2'>Products</div>
            </Link>
            <Link to="/viewcategory">
              <div className='aheader_category3'>Categories</div>
            </Link>
            <Link to="/viewcustomer">
              <div className='aheader_category4'>Customers</div>
            </Link>
            <Link to="/viewvendors">
              <div className='aheader_category5'>Vendors</div>
            </Link>
            <Link to="/vieworders">
              <div className='aheader_category6'>Orders</div>
            </Link>
            <Link to="/awallet">
              <div className='aheader_category7'>Wallet</div>
            </Link>
            </div>
            <div className='aheader_nav'>
                <Link to={!sign && "/adminlogin"}>
                    <div className='aheader_option'>
                     <span className='aheader_optionLineOne'>Hello {!sign ?'Admin':sign.adminid}</span>
                     <span className='aheader_optionLineTwo' onClick={signOut}>{sign ? 'Sign Out' :'Sign In'}</span>
                    </div>
                </Link> 
                
            </div>
               
        </div>
    )
}
export default AdminHeader