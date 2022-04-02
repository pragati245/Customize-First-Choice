import React from 'react'
import '../compheader.css';
import {Table } from 'react-bootstrap';

export default class ViewCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            to: []
        }
    }
    componentDidMount = () => {
        fetch(process.env.REACT_APP_BASE_URL + "/category/getallcategory")
            .then(resp => resp.json())
            .then(data => this.setState({ to: data }));

    }
    render() {
        const to1 = this.state.to.length;
        return (
            <div>{to1 != 0 ?
                <div className='vhome'>
                    <div className='vhome_container'>
                        <div className='vhome_row'>
                            {/* <table>
                                <tr>
                                    <th>Category ID</th>
                                    <th>Category Name</th>
                                    <th>Category Type</th>
                                </tr>
                                {
                                    this.state.to.map(
                                        (o) => {
                                            return (
                                                <tr>
                                                    <td>{o.c_id}</td>
                                                    <td>{o.c_name}</td>
                                                    <td>{o.c_type}</td>
                                                </tr>
                                            );
                                        }
                                    )
                                }
                            </table> */}
                            <Table striped bordered hover>
                                <thead>
                                    <tr style={{ backgroundColor: "#6e1230", color: "white" }}>
                                        <th>Category ID</th>
                                        <th>Category Name</th>
                                        <th>Category Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.to.map(
                                            (o) => {
                                                return (
                                                    <tr>
                                                        <td>{o.c_id}</td>
                                                        <td>{o.c_name}</td>
                                                        <td>{o.c_type}</td>
                                                    </tr>
                                                );
                                            }
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                        <div className=''>Total Number Of Category:<br />{this.state.to.length}</div>
                    </div>
                </div>
                : <div style={{ textAlign: "center", color: "black" }}><h2>No Data</h2></div>
            }
            </div>
        )
    }
}