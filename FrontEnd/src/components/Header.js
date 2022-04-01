import React ,{useState} from 'react';
import '../Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom';
import {useStateValue} from './Stateprovider';
function Header() {
    const [{basket}]=useStateValue();
    const [text,setText]=useState("");
    let textInput=React.createRef();
    localStorage.setItem('text',text);
    //console.log(JSON.parse(localStorage.getItem('data1')));
    let sign=JSON.parse(localStorage.getItem('data1'));
    let signOut= ()=>{
        if(sign!=null)
        {
            localStorage.removeItem('data1');
            window.location.href = '/login';
        }
    }
    console.log(sign);
    return (
        
        <div className='header'>
            <Link to="/">
              <HomeIcon className='header_homeIcon'/> 
            </Link>
            <Link to="/men">
              <p className='header_category'>Men</p>
            </Link>
            <Link to="/women">
              <p className='header_category'>Women</p>
            </Link>
            <div className='header_search'>
                <input  className='header_searchInput' ref={textInput} type="text" />
                <Link to="/search"><SearchIcon className='header_searchIcon' onClick={()=>(setText(textInput.current.value))}/></Link>
            </div >
            <div className='header_nav'>
                <Link to={!sign && "/login"}>
                    <div className='header_option'>
                     <span className='header_optionLineOne'>Hello {!sign ?'User':sign.ufname}</span>
                     <span className='header_optionLineTwo' onClick={signOut}>{sign? 'Sign Out':'Sign In'}</span>
                    </div>
                </Link> 
                <Link to={"/order"}>
                <div className='header_option'>
                    <span className='header_optionLineOne'>Returns</span>
                    <span className='header_optionLineTwo'>& Order</span>
                </div>
                </Link>
                <Link to="/wallet">
                    <p className='header_category'>Wallet</p>
                </Link>
                <Link to="/checkout">
                    <div className='header_optionBasket'>
                        <ShoppingCartIcon />
                        <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>                
                    </div>
                </Link> 
            </div>
               
        </div>
    )
}

export default Header
