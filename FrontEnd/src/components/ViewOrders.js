import React from 'react'
import '../compheader.css';

export default class ViewOrders extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            to: []
        }
    }
    componentDidMount =()=>{
        fetch("http://localhost:8080/getMyOrder")
        .then(resp => resp.json())
        .then(data =>{
            {this.setState({to: data})}}
            );
            console.log(this.state.to.length);    
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
                                <table><tr><th>Order ID</th><th>User ID</th><th>User Name</th><th>User Address</th><th>User ContactNumber</th><th>Order TotalPrice</th><th>Order QTY</th><th>Order Status</th></tr>
                                     { this.state.to.map((o) => {return(<tr><td>{o.oid}</td><td>{o.uid}</td><td>{o.uname}</td><td>{o.address}</td><td>{o.contactno}</td><td>{o.totalprice}</td><td>{o.qty}</td><td>{o.ostatus}</td></tr>);})}
                            </table>
                        </div>
                    <div className='vhome_row'>Total Number Of Orders:<br/>{this.state.to.length}</div>
                </div>
            </div>
        : < div style={{textAlign:"center",color:"black"}}><h2>No Data</h2></div> 
      }
      </div>
    );
    }
}