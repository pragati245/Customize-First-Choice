import React from 'react';
import '../register.css';
import { Link } from 'react-router-dom';
import 'react-dropdown/style.css';
import { Form } from 'react-bootstrap';

export default class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cname: "",
            ctype: "",
        }
    }

    handleChange = (a) => {
        //this.setState({ cname: a.target.cname });
        this.setState({ ctype: a.target.value });
        //console.log(this.state.cname);
        console.log(this.state.ctype);

    }
    handleChange1 = (a) => {
        this.setState({ cname: a.target.value });
        console.log(this.state.cname);

    }
    submitForm = async (e) => {
        e.preventDefault();
        const reqData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                c_name: this.state.cname,
                c_type: this.state.ctype,

            })
        };
        await fetch(process.env.REACT_APP_BASE_URL + "/category/addcategory", reqData)
            .then(resp => resp.json())
            .then(data => this.setState({ st: data, success: true }));
        window.location.href = "/admin";
    }
    render() {
        return (
            <div className='register'>
                <div className='register_container'>
                    <form >
                        {/* <h5>Category Name</h5> */}
                        {/* <input type="text" name="cname" value={this.state.cname} onChange={this.handleChange1} /> */}
                        <Form.Group className="mb-2">
                            <Form.Label>Category Name</Form.Label>
                            <Form.Control type="text" name="cname" value={this.state.cname} onChange={this.handleChange1} />
                        </Form.Group>

                        <br />
                        <div className="category_type">

                            <h5>Category Type</h5>
                            <input type="radio" value="STITCHED" id="STITCHED" onChange={this.handleChange} name="ctype" />

                            <label for="STITCHED">STITCHED</label>
                            <input type="radio" value="RAW" id="RAW" onChange={this.handleChange} name="ctype" /><label for="RAW">RAW</label><br />
                        </div>
                        <Link to="/viewproducts"> <button className='innerbutton mt-3' type="submit" value="Submit" onClick={this.submitForm}>Add Category</button></Link><br />
                    </form>
                </div>
            </div>

        )
    }
}