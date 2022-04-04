import React from 'react'
import '../Product.css'
import { useStateValue } from './Stateprovider'
import { Row, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Product({
  id,
  title,
  describe,
  size,
  brand,
  price,
  image,
  rating,
  c_type,
  c_name,
  p_qty,
  imageUrl,
}) {
  const [{ basket }, dispatch] = useStateValue()
  console.log('this is basket', basket)
  //let x=10;

  const addToBasket = () => {
    //dispatch item in data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        pid: id,
        pname: title,
        pdesc: describe,
        psize: size,
        pbrand: brand,
        pimage: image,
        pprice: price,
        prating: rating,
        p_qty: p_qty,
        quantity: 1,
        imageUrl: imageUrl,
      },
    })
  }
  const checkProductInCart = () => {
    let c = basket.filter((b) => b.pid === id)
    if (c.length > 0) {
      return true
    } else {
      return false
    }
  }
  return (
    // <div className='product'>
    //     <img className='product_img' src={image} alt="productImg" />
    //     <div className='product_info'>
    //         <p>{title}</p>
    //         <p>{describe}</p>
    //         <p>{size}</p>
    //         <p>{brand}</p>
    //         <p className='product_price'>
    //             <small>Rs</small>
    //             <strong>{price}</strong>
    //         </p>

    //         <div className='product_rating'>
    //             {Array(rating).fill().map((_, i) => (<p>⭐</p>))}
    //         </div>
    //     </div>
    //     <button onClick={addToBasket}>Add to Basket</button>
    // </div>
    <Col>
      <Card
        style={{
          padding: '20px',
          boxShadow:
            'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
        }}
      >
        <Card.Img
          variant="top"
          src={imageUrl ? imageUrl : image}
          alt="Image Not Found"
          style={{
            borderRadius: '4px',
            boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px',
          }}
          //   https://www.nicepng.com/png/full/304-3048415_business-advice-product-icon-png.png
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text style={{ marginBottom: '0px' }}>{describe}</Card.Text>
          <Card.Text style={{ marginBottom: '0px' }}>Size - {size}</Card.Text>
          <Card.Text style={{ marginBottom: '0px' }}>Brand - {brand}</Card.Text>
          <Card.Text>
            {/* <small>Rs </small> */}
            <strong>₹{price}</strong>
          </Card.Text>
          <Card.Text>
            Total Stocks in inventory :<strong>{p_qty}</strong>
          </Card.Text>
          <Card.Text className="product_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i}>⭐</p>
              ))}
          </Card.Text>
          {checkProductInCart() ? (
            <Link to="/checkout">
              <button className="addToCartBtn"> Go to cart</button>
            </Link>
          ) : (
            <button onClick={addToBasket} className="addToCartBtn">
              + Add to Basket
            </button>
          )}
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Product
