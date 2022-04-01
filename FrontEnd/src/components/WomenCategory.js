import React from "react";
import '../Home.css';
import Photo2 from '../Photo2.jpg';
import Product from './Product.js';

class WomenCategory extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            sr: [],
            searcherror:" "
        }
    }
    componentDidMount =()=>{
        fetch("http://localhost:8080/women")
        .then(resp => resp.json())
        .then(data => 
            {if(data.length!=0)
                {
                    console.log(JSON.stringify(data));
                    this.setState({sr: data})
                }
                else
                {
                    this.setState({searcherror: "Result not found :("});
                }
            });
    }

    render(){
        return(
            <div>
            <div className='home'>
                <div className='home_container'>    
                {
                        this.state.sr.map(
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
                <p> {this.state.searcherror} </p>
            </div>
           </div>
        </div>
        )
    }

}
export default WomenCategory;