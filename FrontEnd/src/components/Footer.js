import React from 'react';
import '../Footer.css';
import FooterLogo from '../assets/img/Logo.png';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/Logo.png';

var style = {
    backgroundColor: "#e9ecef",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    // position: "fixed",
    left: "0",
    bottom: "0",
    // height: "60px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}
function Footer(props) {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
            <div className="mb-2"><img src={Logo} alt="Logo" style={{width:"100px"}}/></div>
                {/* {children} */}
                @2022 First Choice<br></br>
                {/* CONTACT US:<br></br>
                123, Ahuja Naagar,Delhi,2333,<br></br>
                +916767676766 */}
            </div>
        </div>
    )
}


export default Footer;