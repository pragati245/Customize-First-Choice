import React from 'react';
import '../adminheader.css';
import { Link, NavLink } from 'react-router-dom';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Navbar, Nav, Container } from "react-bootstrap";

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
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to="/viewproducts" className="navbar_brand"><Navbar.Brand > &nbsp;</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to={"/addcategory"} className={window.location.pathname === "/addcategory" ? "headerLink headerLinkActive" : "headerLink"} >Add Category</NavLink>
            <NavLink to={"/viewproducts"} className={window.location.pathname === "/viewproducts" ? "headerLink headerLinkActive" : "headerLink"} >Products</NavLink>
            <NavLink to={"/viewcategory"} className={window.location.pathname === "/viewcategory" ? "headerLink headerLinkActive" : "headerLink"} >Categories</NavLink>
            <NavLink to={"/viewcustomer"} className={window.location.pathname === "/viewcustomer" ? "headerLink headerLinkActive" : "headerLink"} >Customers</NavLink>
            <NavLink to={"/viewvendors"} className={window.location.pathname === "/viewvendors" ? "headerLink headerLinkActive" : "headerLink"} >Vendors</NavLink>
            <NavLink to={"/vieworders"} className={window.location.pathname === "/vieworders" ? "headerLink headerLinkActive" : "headerLink"} >Orders</NavLink>


          </Nav>
          <Nav.Link>
            <Link to={"/awallet"} className="headerLink">
              <AccountBalanceWalletIcon fontSize="large" style={{ color: "#6e1230" }} />
            </Link>
          </Nav.Link>
          <Nav.Link >
            <Link to={!sign && "/adminlogin"} className="headerLink">
              <div className='aheader_option'>
                <span className='aheader_optionLineOne'>Hello {!sign ? 'Admin' : sign.a_id}</span>
                <span className='aheader_optionLineTwo' onClick={signOut}>{sign ? 'Sign Out' : 'Sign In'}</span>
              </div>
            </Link>
          </Nav.Link>
          <Nav.Link style={{ color: "#6e1230" }}>
            <Link to={"/viewproducts"} className="headerLink">Admin
            </Link></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // </div>
  )
}
export default AdminHeader