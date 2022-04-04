import React , {useState,useEffect} from 'react'
import '../Home.css'
import Photo2 from '../Photo2.jpg'
import Product from './Product.js'
import Loader from './Loader'
import Footer from './Footer';
import { useLocation } from 'react-router-dom'
const Search = (props) => {
  const[sr,setsr] = useState([])
  const[searcherror,setsearcherror] = useState("")
  const[loading,setloading] = useState(false)
  const { state } = useLocation();
  console.log(state);
  useEffect(() =>{
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
          } else {
            setsearcherror('Result not found :(')
            setloading(false)
            setsr([])
          }
        })
  },[state])
  return loading ? (
    <Loader />
  ) : (
    <div>
      <div className="home">
        <div className="home_container">
          {sr.map((o) => {
            return (
              <div className="home_row">
                <Product
                  id={o.pid}
                  title={o.pname}
                  price={o.pprice}
                  image={Photo2}
                  brand={o.pbrand}
                  describe={o.pdesc}
                  size={o.psize}
                  rating={o.prating}
                />
              </div>
            )
          })}
          <p> {searcherror} </p>
        </div>
      </div>
      {sr.length > 0 &&
      <Footer/>}
    </div>
  )
}

export default Search
