import './AboutUs.css';
import {Container} from 'react-bootstrap';

const About = () => {
    return (
        <Container className="aboutDiv">
            <div className="aboutHead">About Us</div>
            <div className="mt-4 aboutText">This might be the most distinctive website we’ve come across.

                Anton & Irene is a design agency based in Manhattan.

                Why are they a distinctive web presence?

                Because their page takes parallax scrolling to the next level.

                The snowy effects, bold colors, and quirky visuals create a truly captivating experience.</div>
        </Container>
    )
}
export default About;