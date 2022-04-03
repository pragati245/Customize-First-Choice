import React from 'react';
import '../VendorHeader.css';
import HomeIcon from '@material-ui/icons/Home';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Button, Form, FormControl, Container } from "react-bootstrap";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

function VendorHeader(props) {

  console.log(JSON.parse(localStorage.getItem('data1')));
  let sign = JSON.parse(localStorage.getItem('data1'));
  let signOut = () => {
    if (sign != null) {
      localStorage.removeItem('data1');
      window.location.href = '/vendorlogin';
    }
  }
  console.log(sign);
  console.log(window.location.pathname)

  return (

    // <div className='vheader'>
    //     <Link to="/vendor">
    //       <HomeIcon className='vheader_homeIcon'/>
    //     </Link>
    //         <p className="vheader_value">Vendor</p>
    //         <div className='vheader_category'>
    //     <Link to="/addproduct">
    //       <div className='vheader_category1'>Add Products</div>
    //     </Link>
    //     <Link to="/viewproductoutofstock">
    //       <div className='vheader_category2'>Product Out Of Stock</div>
    //     </Link>
    //     <Link to="/vwallet">
    //       <div className='vheader_category3'>Wallet</div>
    //     </Link>
    //     </div>
    //     <div className='vheader_nav'>
    //         <Link to={!sign && "/vendorlogin"}>
    //             <div className='vheader_option'>
    //              <span className='vheader_optionLineOne'>Hello {!sign ?'Vendor':sign.vfname}</span>
    //              <span className='vheader_optionLineTwo' onClick={signOut}>{sign ? 'Sign Out' :'Sign In'}</span>
    //             </div>
    //         </Link> 

    //     </div>

    // </div>

    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to="/vendor" className="navbar_brand"><Navbar.Brand > &nbsp;</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <NavLink to={"/addcategory"} className="headerLink" >Vendor</NavLink> */}
            <NavLink to={"/vendor"} className={window.location.pathname==="/vendor"?"headerLink headerLinkActive" : "headerLink"} >View Products</NavLink>
            <NavLink to={"/viewproductoutofstock"} className={window.location.pathname==="/viewproductoutofstock"?"headerLink headerLinkActive" : "headerLink"} >Product Out Of Stock</NavLink>
            <NavLink to={"/addproduct"} className={window.location.pathname==="/addproduct"?"headerLink headerLinkActive" : "headerLink"} >Add Products</NavLink>


          </Nav>
          <Nav.Link>
            <Link to={"/vwallet"} className="headerLink">
              <AccountBalanceWalletIcon fontSize="large" style={{ color: "#6e1230" }} />
            </Link>
          </Nav.Link>
          <Nav.Link >
            <Link to={!sign && "/vendorlogin"} className="headerLink">
              <div className='vheader_option'>
                <span className='vheader_optionLineOne'>Hello {!sign ? 'Vendor' : sign.v_name}</span>
                <span className='vheader_optionLineTwo' onClick={signOut}>{sign ? 'Sign Out' : 'Sign In'}</span>
              </div>
            </Link>
          </Nav.Link>
          <Nav.Link style={{ color: "#6e1230" }} >
            <Link to={"/vendor"} className="headerLink">Vendor
            </Link></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default VendorHeader
