import React from 'react'
import '../compheader.css';
import { Table } from 'react-bootstrap';

export default class ViewCustomer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            to: []
        }
    }
    componentDidMount = () => {
        fetch(process.env.REACT_APP_BASE_URL + "/user/getalluser")
            .then(resp => resp.json())
            .then(data => this.setState({ to: data }));

    }
    render() {
        const to1 = this.state.to.length;
        return (
            <div>{to1 != 0 ?
                <div className='vhome'>
                    <div className='vhome_container'>
                        <div className=''>
                            {/* <table>
                                <tr>
                                    <th>Customer ID</th>
                                    <th>Customer FirstName</th>
                                    <th>Customer LastName</th>
                                    <th>Customer Email</th>
                                    <th>Customer Address</th>
                                    <th>Customer ContactNumber</th>
                                    <th>Customer Wallet</th>
                                </tr>
                                {
                                    this.state.to.map(
                                        (o) => {
                                            return (
                                                <tr>
                                                    <td>{o.u_id}</td>
                                                    <td>{o.u_fname}</td>
                                                    <td>{o.u_lname}</td>
                                                    <td>{o.u_email}</td>
                                                    <td>{o.u_address}</td>
                                                    <td>{o.u_phone}</td>
                                                    <td>{o.wallet}</td>
                                                </tr>
                                            );
                                        }
                                    )
                                }
                            </table> */}
                            <Table striped bordered hover>
                                <thead>
                                    <tr style={{ backgroundColor: "#6e1230", color: "white" }}>
                                        <th>Customer ID</th>
                                        <th>Customer FirstName</th>
                                        <th>Customer LastName</th>
                                        <th>Customer Email</th>
                                        <th>Customer Address</th>
                                        <th>Customer ContactNumber</th>
                                        <th>Customer Wallet</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.to.map(
                                            (o) => {
                                                return (
                                                    <tr>
                                                        <td>{o.u_id}</td>
                                                        <td>{o.u_fname}</td>
                                                        <td>{o.u_lname}</td>
                                                        <td>{o.u_email}</td>
                                                        <td>{o.u_address}</td>
                                                        <td>{o.u_phone}</td>
                                                        <td>{o.wallet}</td>
                                                    </tr>
                                                );
                                            }
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                        <div className='vhome_row'>Total Number Of Customer:<br />{this.state.to.length}</div>
                    </div>
                </div>
                : <div style={{ textAlign: "center", color: "black" }}><h2>No Data</h2></div>
            }
            </div>
        )
    }
}