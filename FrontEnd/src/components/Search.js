import React, { useState, useEffect } from 'react'
import '../Home.css'
import Photo2 from '../Photo2.jpg'
import Product from './Product.js'
import Loader from './Loader'
import Footer from './Footer';
import { useLocation } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
const Search = (props) => {
  const [sr, setsr] = useState([])
  const [searcherror, setsearcherror] = useState("")
  const [loading, setloading] = useState(false)
  const { state } = useLocation();
  console.log(state);
  useEffect(() => {
    console.log("As")
    setloading(true)
    const reqData = {
      method: 'GET',
    }
    fetch(
      process.env.REACT_APP_BASE_URL +
      '/product/search/' +
      state,
    )
      .then((resp) => resp.json())
      .then((data) => {
        if (data.length != 0) {
          console.log(JSON.stringify(data))
          setsr(data)
          setloading(false)
          setsearcherror("")
        } else {
          setsearcherror('Result not found :(')
          setloading(false)
          setsr([])
        }
      })
  }, [state])
  return loading ? (
    <Loader />
  ) : (
    <div>
      <div className="home">
        <Container className="mt-3">
          <Row xs={2} md={4} className="g-4 mt-2">
            {sr.map((o) => {
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
            <p> {searcherror} </p>
          </Row>
        </Container>


      </div>
      {sr.length > 0 &&
        <Footer />}
    </div>
  )
}

export default Search
