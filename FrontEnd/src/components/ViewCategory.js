import React from 'react'
import '../compheader.css';

export default class ViewCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            to: []
        }
    }
    componentDidMount = () => {
        fetch("http://localhost:8080/getallcategory")
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
                            <table>
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
                                                    <td>{o.cid}</td>
                                                    <td>{o.cname}</td>
                                                    <td>{o.ctype}</td>
                                                </tr>
                                            );
                                        }
                                    )
                                }
                            </table>
                        </div>
                        <div className='vhome_row'>Total Number Of Category:<br />{this.state.to.length}</div>
                    </div>
                </div>
                : <div style={{ textAlign: "center", color: "black" }}><h2>No Data</h2></div>
            }
            </div>
        )
    }
}