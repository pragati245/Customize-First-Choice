import React, { useState } from 'react';
import '../Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import { useStateValue } from './Stateprovider';
import { Navbar, Nav, Button, Form, FormControl, Container } from "react-bootstrap";

function Header() {
    const [{ basket }] = useStateValue();
    const [text, setText] = useState("");
    let textInput = React.createRef();
    localStorage.setItem('text', text);
    //console.log(JSON.parse(localStorage.getItem('data1')));
    let sign = JSON.parse(localStorage.getItem('data1'));
    let signOut = () => {
        if (sign != null) {
            localStorage.removeItem('data1');
            window.location.href = '/login';
        }
    }
    console.log(sign);
    return (

        // <div className='header'>
        //     <Link to="/">
        //       <HomeIcon className='header_homeIcon'/> 
        //     </Link>
        //     <Link to="/men">
        //       <p className='header_category'>Men</p>
        //     </Link>
        //     <Link to="/women">
        //       <p className='header_category'>Women</p>
        //     </Link>
        //     <div className='header_search'>
        //         <input  className='header_searchInput' ref={textInput} type="text" />
        //         <Link to="/search"><SearchIcon className='header_searchIcon' onClick={()=>(setText(textInput.current.value))}/></Link>
        //     </div >
        //     <div className='header_nav'>
        //         <Link to={!sign && "/login"}>
        //             <div className='header_option'>
        //              <span className='header_optionLineOne'>Hello {!sign ?'User':sign.ufname}</span>
        //              <span className='header_optionLineTwo' onClick={signOut}>{sign? 'Sign Out':'Sign In'}</span>
        //             </div>
        //         </Link> 
        //         <Link to={"/order"}>
        //         <div className='header_option'>
        //             <span className='header_optionLineOne'>Returns</span>
        //             <span className='header_optionLineTwo'>& Order</span>
        //         </div>
        //         </Link>
        //         <Link to="/wallet">
        //             <p className='header_category'>Wallet</p>
        //         </Link>
        //         <Link to="/checkout">
        //             <div className='header_optionBasket'>
        //                 <ShoppingCartIcon />
        //                 <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>                
        //             </div>
        //         </Link> 
        //     </div>

        // </div>
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">&nbsp;</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/men" style={{ color: "#6e1230" }}>Raw</Nav.Link>
                        <Nav.Link href="/women" style={{ color: "#6e1230" }}>Stitched</Nav.Link>

                    </Nav>
                    <Form className="d-flex" onSubmit={() => (setText(textInput.current.value))}>
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            ref={textInput}
                        />
                        <button className="searchBtn">Search</button>
                    </Form>
                    <Nav.Link href={!sign && "/login"}>
                        <div className='header_option'>
                            <span className='header_optionLineOne'>Hello {!sign ? 'User' : sign.ufname}</span>
                            <span className='header_optionLineTwo' onClick={signOut}>{sign ? 'Sign Out' : 'Sign In'}</span>
                        </div></Nav.Link>
                    <Nav.Link href={"/order"}>
                        <div className='header_option'>
                            <span className='header_optionLineOne'>Returns</span>
                            <span className='header_optionLineTwo'>& Order</span>
                        </div>
                    </Nav.Link>
                    <Nav.Link href="/wallet">
                        {/* <p className='header_category'>Wallet</p> */}
                        <AccountBalanceWalletIcon fontSize="large" style={{ color: "#6e1230" }} />
                    </Nav.Link>
                    <Nav.Link href="/checkout">
                        <div className='header_optionBasket'>
                            <ShoppingCartIcon fontSize="large" style={{ color: "#6e1230" }} />
                            <span className='header_optionLineTwo header_basketCount' style={{ color: "#6e1230" }}>{basket?.length}</span>
                        </div>
                    </Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
