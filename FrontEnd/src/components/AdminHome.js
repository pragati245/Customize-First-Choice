import React from 'react'
import '../compheader.css';

export default class AdminHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            to: [],
            to1: [],
            vvid: "",
            t: "",
        }
        this.accept = this.accept.bind(this);
    }
    componentDidMount = () => {
        fetch("http://localhost:8080/getallvendoraudit")
            .then(resp => resp.json())
            .then(data => this.setState({ to: data }));
        fetch("http://localhost:8080/getallproductaudit")
            .then(resp => resp.json())
            .then(data => this.setState({ to1: data }));

    }
    accept = (e) => {
        console.log("in accept");
        const url = "http://localhost:8080/vendorstatusaction?vid=" + e + "&action=yes"
        fetch(url)
            .then(resp => resp.text())
            .then(data => this.setState({ t: data }));
        window.location.href = "/admin";
    }
    deny = (e) => {
        console.log("in deny");
        const url = "http://localhost:8080/vendorstatusaction?vid=" + e + "&action=No"
        fetch(url)
            .then(resp => resp.text())
            .then(data => this.setState({ t: data }));
        window.location.href = "/admin";
    }

    accept1 = (e1, e2, e3) => {
        console.log("in accept1");
        const url = "http://localhost:8080/productstatusaction?pid=" + e1 + "&pprice=" + e2 + "&pqty=" + e3 + "&action=yes"
        fetch(url)
            .then(resp => resp.text())
            .then(data => this.setState({ t: data }));
        window.location.href = "/admin";
    }
    deny1 = (e1, e2, e3) => {
        console.log("in deny1");
        const url = "http://localhost:8080/productstatusaction?pid=" + e1 + "&pprice=" + e2 + "&pqty=" + e3 + "&action=No"
        fetch(url)
            .then(resp => resp.text())
            .then(data => this.setState({ t: data }));
        window.location.href = "/admin";
    }
    render() {
        const to = this.state.to.length;
        const to1 = this.state.to1.length;
        return (
            <div>
                <div>{to != 0 ?
                    <div className='vhome'>
                        <div className='vhome_container'>
                            <div className='vhome_row'>
                                <table>
                                    <tr>
                                        <th>Vendor ID</th>
                                        <th>Vendor UniqueId</th>
                                        <th>Vendor FirstName</th>
                                        <th>Vendor LastName</th>
                                        <th>Time</th>
                                        <th>Accept</th>
                                        <th>Deny</th>
                                    </tr>
                                    {
                                        this.state.to.map(
                                            (o) => {
                                                return (
                                                    <tr>
                                                        <td name="vid" value={this.state.vid}>{o.vid}</td>
                                                        <td>{o.vuid}</td>
                                                        <td>{o.vfname}</td>
                                                        <td>{o.vlname}</td>
                                                        <td>{o.vtime}</td>
                                                        <td><button onClick={() => { this.accept(o.vid) }}>Approve</button></td>
                                                        <td><button onClick={() => { this.deny(o.vid) }}>Deny</button></td>
                                                    </tr>
                                                );
                                            }
                                        )
                                    }
                                </table>
                            </div>
                            </div>
                            </div>
                            : <div style={{ textAlign: "center", color: "black" }}><h2>No New Vendor Register</h2></div>
                }</div>
                        <div>{to1 != 0 ?
                        <div className='vhome'>
                        <div className='vhome_container'>
                            <div className='vhome_row'>
                                <table>
                                    <tr>
                                        <th>Product ID</th>
                                        <th>Product Name</th>
                                        <th>Product Price</th>
                                        <th>Product Quantity</th>
                                        <th>Time</th>
                                        <th>Accept</th>
                                        <th>Deny</th>
                                    </tr>
                                    {
                                        this.state.to1.map(
                                            (o1) => {
                                                return (
                                                    <tr>
                                                        <td >{o1.pid}</td>
                                                        <td>{o1.pname}</td>
                                                        <td>{o1.pprice}</td>
                                                        <td>{o1.pqty}</td>
                                                        <td>{o1.ptime}</td>
                                                        <td><button onClick={() => { this.accept1(o1.pid, o1.pprice, o1.pqty) }}>Approve</button></td>
                                                        <td><button onClick={() => { this.deny1(o1.pid, o1.pprice, o1.pqty) }}>Deny</button></td>
                                                    </tr>
                                                );
                                            }
                                        )
                                    }
                                </table>
                            </div>
                            </div></div>
                    : <div style={{ textAlign: "center", color: "black" }}><h2>No New Product added</h2></div>
                }
                </div>
            </div>
        );
    }
}