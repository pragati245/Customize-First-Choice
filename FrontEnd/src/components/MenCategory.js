import React from "react";
import '../Home.css';
import Photo2 from '../Photo2.jpg';
import Product from './Product.js';
import { Container, Row } from 'react-bootstrap';
import Loader from './Loader';
import Footer from './Footer.js';
class MenCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sr: [],
            searcherror: " ",
            loading: false
        }
    }
    componentDidMount = () => {
        this.setState({ loading: true })
        fetch(process.env.REACT_APP_BASE_URL + "/product/raw")
            .then(resp => resp.json())
            .then(data => {
                if (data.length != 0) {
                    console.log(JSON.stringify(data));
                    this.setState({ sr: data, loading: false })
                }
                else {
                    this.setState({ searcherror: "Result not found :(" });
                }
            });
    }

    render() {
        return (
            this.state.loading ? <Loader /> :
                <div>
                    <div className='home'>
                        <Container className='mt-3'>
                            <Row xs={2} md={4} className="g-4 mt-2">
                                {
                                    this.state.sr.map(
                                        (o) => {

                                            return (
                                                <div className=''>
                                                    <Product id={o.pid} title={o.pname} price={o.pprice} image={Photo2} brand={o.pbrand} describe={o.pdesc} size={o.psize} rating={o.prating} imageUrl={o.imageUrl}/>
                                                </div>
                                            );
                                        }
                                    )
                                }
                                <p> {this.state.searcherror} </p>
                            </Row>
                        </Container>
                    </div>
                    <Footer />
                </div>
        )
    }

}
export default MenCategory;