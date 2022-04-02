import React from 'react';
import '../adminheader.css';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Navbar, Nav, Button, Form, FormControl, Container } from "react-bootstrap";

function AdminHeader() {
  console.log(JSON.parse(localStorage.getItem('data1')));
  let sign = JSON.parse(localStorage.getItem('data1'));
  let signOut = () => {
    if (sign != null) {
      localStorage.removeItem('data1');
      window.location.href = '/adminlogin';
    }
  }
  console.log(sign);
  return (

    // <div className='aheader'>
    //   <Link to="/admin">
    //     <HomeIcon className='aheader_homeIcon' />
    //   </Link>
    //   <p className="aheader_value">Admin</p>
    //   <div className='aheader_category'>
    //     <Link to="/addcategory">
    //       <div className='aheader_category1'>Add Category</div>
    //     </Link>
    //     <Link to="/viewproducts">
    //       <div className='aheader_category2'>Products</div>
    //     </Link>
    //     <Link to="/viewcategory">
    //       <div className='aheader_category3'>Categories</div>
    //     </Link>
    //     <Link to="/viewcustomer">
    //       <div className='aheader_category4'>Customers</div>
    //     </Link>
    //     <Link to="/viewvendors">
    //       <div className='aheader_category5'>Vendors</div>
    //     </Link>
    //     <Link to="/vieworders">
    //       <div className='aheader_category6'>Orders</div>
    //     </Link>
    //     <Link to="/awallet">
    //       <div className='aheader_category7'>Wallet</div>
    //     </Link>
    //   </div>
    //   <div className='aheader_nav'>
    //     <Link to={!sign && "/adminlogin"}>
    //       <div className='aheader_option'>
    //         <span className='aheader_optionLineOne'>Hello {!sign ? 'Admin' : sign.adminid}</span>
    //         <span className='aheader_optionLineTwo' onClick={signOut}>{sign ? 'Sign Out' : 'Sign In'}</span>
    //       </div>
    //     </Link>

    //   </div>


    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">&nbsp;</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/addcategory" style={{ color: "#6e1230" }}>Add Category</Nav.Link>
            <Nav.Link href="/viewproducts" style={{ color: "#6e1230" }}>Products</Nav.Link>
            <Nav.Link href="/viewcategory" style={{ color: "#6e1230" }}>Categories</Nav.Link>
            <Nav.Link href="/viewcustomer" style={{ color: "#6e1230" }}>Customers</Nav.Link>
            <Nav.Link href="/viewvendors" style={{ color: "#6e1230" }}>Vendors</Nav.Link>
            <Nav.Link href="/vieworders" style={{ color: "#6e1230" }}>Orders</Nav.Link>
          </Nav>
          <Nav.Link href="/awallet">
            <AccountBalanceWalletIcon fontSize="large" style={{ color: "#6e1230" }} />
          </Nav.Link>
          <Nav.Link href={!sign && "/adminlogin"}>
            <div className='aheader_option'>
              <span className='aheader_optionLineOne'>Hello {!sign ? 'Admin' : sign.adminid}</span>
              <span className='aheader_optionLineTwo' onClick={signOut}>{sign ? 'Sign Out' : 'Sign In'}</span>
            </div>
          </Nav.Link>
          <Nav.Link href="/viewproducts" style={{ color: "#6e1230" }}>Admin</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // </div>
  )
}
export default AdminHeader