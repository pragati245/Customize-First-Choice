import React from 'react'
import '../VendorHome.css';

export default class VendorHome extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            to: []
        }
    }
    componentDidMount =()=>{
        let sign=JSON.parse(localStorage.getItem('data1'));
        const url="http://localhost:8080/viewbyvid?vid="+sign.vid;
        fetch(url)
        .then(resp => resp.json())
        .then(data =>this.setState({to: data}));
                
    }
    render(){
    return (
        <div className='vhome'>
           <div className='vhome_container'>
            <div className='vhome_row'>
                <table className="table table-bordered table-striped">
                    <tr>
                        <th>Product ID</th>
                        <th>Product Title</th>
                        <th>Product Describe</th>
                        <th>Product Size</th>
                        <th>Product Brand</th>
                        <th>Product Price</th>
                        <th>Product Rating</th>
                        <th>Product Approve</th>
                    </tr>
                    {
                        this.state.to.map(
                            (o) => {
                                return(
                                    <tr>
                                        <td>{o.pid}</td>
                                        <td>{o.pname}</td>
                                        <td>{o.pdesc}</td>
                                        <td>{o.psize}</td>
                                        <td>{o.pbrand}</td>
                                        <td>{o.pprice}</td>
                                        <td>{o.prating}</td>
                                        <td>{o.papprove}</td>
                                    </tr>
                                );
                            }
                        )    
                    }
                </table>
                </div>
                <div className='vhome_row'>Total Number Of Products:<br/>{this.state.to.length}</div>
           </div>
        </div>
    )
}
}