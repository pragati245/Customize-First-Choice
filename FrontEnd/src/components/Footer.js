import React from 'react';
import '../Footer.css';
import FooterLogo from '../assets/img/Logo.png';
import { Link } from 'react-router-dom';

var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
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
                {/* {children} */}
                @asd
            </div>
        </div>
    )
}


export default Footer;