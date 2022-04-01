import React  from 'react';
import '../VendorHeader.css';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom';

function VendorHeader() {

    console.log(JSON.parse(localStorage.getItem('data1')));
    let sign=JSON.parse(localStorage.getItem('data1'));
    let signOut= ()=>{
        if(sign!=null)
        {
            localStorage.removeItem('data1');
            window.location.href = '/vendorlogin';
        }
    }
    console.log(sign);
    return (
        
        <div className='vheader'>
            <Link to="/vendor">
              <HomeIcon className='vheader_homeIcon'/>
            </Link>
                <p className="vheader_value">Vendor</p>
                <div className='vheader_category'>
            <Link to="/addproduct">
              <div className='vheader_category1'>Add Products</div>
            </Link>
            <Link to="/viewproductoutofstock">
              <div className='vheader_category2'>Product Out Of Stock</div>
            </Link>
            <Link to="/vwallet">
              <div className='vheader_category3'>Wallet</div>
            </Link>
            </div>
            <div className='vheader_nav'>
                <Link to={!sign && "/vendorlogin"}>
                    <div className='vheader_option'>
                     <span className='vheader_optionLineOne'>Hello {!sign ?'Vendor':sign.vfname}</span>
                     <span className='vheader_optionLineTwo' onClick={signOut}>{sign ? 'Sign Out' :'Sign In'}</span>
                    </div>
                </Link> 
                
            </div>
               
        </div>
    )
}
export default VendorHeader
