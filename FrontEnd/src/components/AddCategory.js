import React from 'react';
import '../register.css';
import { Link } from 'react-router-dom';
import 'react-dropdown/style.css';

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
    submitForm = (e) => {
        e.preventDefault();
    const reqData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cname: this.state.cname,
            ctype: this.state.ctype,
           
        })
    };

    fetch("http://localhost:8080/savecategory",reqData)
    .then(resp => resp.json())
    .then(data => this.setState({st: data, success: true}));
    window.location.href="/admin";
    }
    render() {
        return (
            <div className='register'>
                <div className='register_container'>
                    <form >
                        <h5>Category Name</h5><input type="text" name="cname" value={this.state.cname} onChange={this.handleChange1} /><br />
                            <div className="category_type">
                            <h5>Category Type</h5><input type="radio" value="M" id="F" onChange={this.handleChange} name="ctype" /><label for="M">M</label>
                            <input type="radio" value="F" id="F" onChange={this.handleChange} name="ctype"/><label for="F">F</label><br />
                            </div>
                        <Link to="/admin"> <button className='innerbutton' type="submit" value="Submit" onClick={this.submitForm}>Add Category</button></Link><br />
                    </form>
                </div>
            </div>

        )
    }
}