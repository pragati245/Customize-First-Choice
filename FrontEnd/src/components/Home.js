import React from 'react'
import '../Home.css';
import baner from '../BGIMG.png';
import Photo2 from '../Photo2.jpg';
import Product from './Product.js';

export default class Home extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            to: []
        }
    }
    componentDidMount =()=>{
        fetch("http://localhost:8080/getallproducts")
        .then(resp => resp.json())
        .then(data => this.setState({to: data}));
        
        //alert(this.state.to);

    }
    render(){
    return (
        <div className='home'>
           <div className='home_container'>
               <img className='home_img' src={baner} alt="baner"/>
                
                {
                        this.state.to.map(
                            (o) => {
                                if(o.papprove==="true")
                                {
                                    return(
                                        <div className='home_row'>
                                            <Product id={o.pid} title={o.pname} price={o.pprice} image={Photo2} brand={o.pbrand} describe={o.pdesc} size={o.psize} rating={o.prating}/>
                                        </div>
                                    );
                                }
                            }
                        )
                }            
               
           </div>
        </div>
    )
}
}