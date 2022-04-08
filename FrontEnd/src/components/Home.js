import React from 'react'
import '../Home.css'
import Photo2 from '../Photo2.jpg'
import Product from './Product.js'
import { Container, Row } from 'react-bootstrap'
import Loader from './Loader'
import Footer from './Footer.js'
import Slider from './Slider';

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      to: [],
      loading: false,
      isError: false
    }
  }

  componentDidMount = () => {
    this.setState({ loading: true })
    fetch(process.env.REACT_APP_BASE_URL + '/product/getallproducts')
      .then((resp) => resp.json())
      .then((data) => this.setState({ to: data, loading: false })).catch(e => {
        this.setState({ isError: true, loading: false })
      })
  }
  render() {
    return this.state.loading ? (
      <Loader />
    ) : this.state.isError ? <h1>Something went wrong :(<br></br>Check your internet connection</h1> : (
      <div>
        <Slider />
        <div className="home">
          <Container className="mt-3">
            <Row xs={2} md={4} className="g-4 mt-2">
              {this.state.to.map((o) => {
                return (
                  <div className="" key={o.p_id}>
                    <Product
                      id={o.p_id}
                      title={o.pname}
                      price={o.pprice}
                      image={Photo2}
                      brand={o.pbrand}
                      describe={o.pdesc}
                      size={o.psize}
                      rating={o.prating}
                      c_type={o.cat.c_type}
                      c_name={o.cat.c_name}
                      p_qty={o.pqty}
                      imageUrl={o.imageUrl}
                    />
                  </div>
                )
              })}
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    )
  }
}
