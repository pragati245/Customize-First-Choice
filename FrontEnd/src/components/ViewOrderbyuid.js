import React from 'react'
import '../compheader.css';

export default class ViewOrderbyuid extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            to: []
        }
    }
    componentDidMount =()=>{
        let sign=JSON.parse(localStorage.getItem('data1'));
        if(sign===null)
        {
            window.location.href="/";
        }
        else
        {
            console.log(sign.uid);
        fetch("http://localhost:8080/getorderdatafromuid?uid="+sign.uid)
        .then(resp => resp.json())
        .then(data =>{console.log(data);
            {this.setState({to: data})}}
            );
            console.log(this.state.to);    
        }
    }
    render()
    {
        const to1= this.state.to.length;
    return (
        <div>
           {to1!=0
           ? <div className='vhome'>
                <div className='vhome_container'>
                         <div className='vhome_row'>
                                <table><tr><th>Order TotalPrice</th><th>Order QTY</th><th>Order Status</th></tr>
                                     { this.state.to.map((o) => {return(<tr><td>{o.totalprice}</td><td>{o.qty}</td><td>{o.ostatus}</td></tr>);})}
                            </table>
                        </div>
                </div>
            </div>
        : < div style={{textAlign:"center",color:"black"}}><h2>No Data</h2></div> 
      }
      </div>
    );
    }
}