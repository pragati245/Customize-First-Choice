import React from 'react'
import '../compheader.css';

export default class ViewVendor extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            to: []
        }
    }
    componentDidMount =()=>{
        fetch("http://localhost:8080/getallvendor")
        .then(resp => resp.json())
        .then(data =>this.setState({to: data}));
                
    }
    render(){
        const to1=this.state.to.length;
    return (
        <div>
        {to1 != 0 ?
            <div className='vhome'>
                <div className='vhome_container'>
                    <div className='vhome_row'>
                    <table><tr><th>Vendor ID</th><th>Vendor UniqueID</th><th>Vendor FirstName</th><th>Vendor LastName</th><th>Vendor ContactNumber</th><th>Vendor Email</th><th>Vendor Address</th><th>Vendor Wallet</th><th>Vendor Approve</th></tr>
                    {this.state.to.map((o) => {return(
                                    <tr><td>{o.vid}</td><td>{o.uniqueid}</td><td>{o.vfname}</td><td>{o.vlname}</td><td>{o.vcontactno}</td><td>{o.vemail}</td><td>{o.vaddress}</td><td>{o.vwallet}</td><td>{o.vstatus}</td></tr>
                                );})}
                </table>
                </div>
                <div className='vhome_row'>Total Number Of Vendors:<br/>{this.state.to.length}</div>
           </div>
        </div>
        :< div style={{textAlign:"center",color:"black"}}><h2>No Data</h2></div>
    }
    </div>
    )
}
}