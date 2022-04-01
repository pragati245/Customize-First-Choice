import React ,{useState} from 'react';
import '../Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
   
    return (
        
        <div className='footer'>
            
            <div>
            <span className='footer_contact'><h3>Contact us At:</h3></span>
                <span className='footer_helpLine'>Email: sapiens@gmail.com  Telephone: 02143-226540</span>
            </div >
            <div className='Social'>
                <h3>Follow us on:</h3>
                <div className='footer_logo'> <FacebookIcon/>
                    <InstagramIcon/>
                    <TwitterIcon/>
                    <WhatsAppIcon/>
                    </div>
            </div>
        </div>
    )
}

export default Footer
