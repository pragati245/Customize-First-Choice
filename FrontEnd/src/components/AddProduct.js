import React from 'react';
import '../register.css';
import { Link } from 'react-router-dom';
import 'react-dropdown/style.css';

export default class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cid: "",
            title: "",
            describe: "",
            size: "",
            brand: "",
            qty: "",
            price: "",
            rating: "",
            cat: [],
            selectedOption:"",
            selectedOption1:"",
            error: {

                titleerr: "",
                describeerr: "",
                sizeerr: "",
                branderr: "",
                qtyerr: "",
                priceerr: "",
                ratingerr: ""
            }
        }
        this.handleOption = this.handleOption.bind(this);
        this.handleOption1 = this.handleOption1.bind(this);

    }

    handleChange = (a) => {
        const input = a.target;
        const nm = input.name;
        let val;
        let error = this.state.error;
        if (nm === "title") {
            val = input.value;
            if (val.length < 5) {
                error.titleerr = "Too short Title";
            }
            else {
                error.titleerr = "";
            }
        }
        else {
            if (nm === "describe") {
                val = input.value;
                if (val.length < 10 && val.length > 100) {
                    error.describeerr = "Description should be in between 10 to 100 Characters";
                }
                else {
                    error.describeerr = "";
                }
            }
            else {
                if (nm === "size") {
                    val = input.value;
                    if (val.length > 5) {
                        error.sizeerr = "Too Large Size";
                    }
                    else {
                        error.sizeerr = "";
                    }
                }
                else {
                    if (nm === "brand") {
                        val = input.value;
                        if (val.length < 2) {
                            error.branderr = "BrandName Too Small";
                        }
                        else {
                            error.branderr = "";
                        }
                    }
                    else {
                        if (nm === "qty") {
                            val = input.value;
                                if (val.length < 1) {
                                    error.qtyerr = "Invalid Quantity";
                                }
                                else {
                                    error.qtyerr = "";
                                }

                        }
                        else {
                            if (nm === "price") {
                                val = input.value;
                                if (val.length < 1) {
                                    error.priceerr = "Invalid price";
                                }
                                else {
                                    error.priceerr = "";
                                }
                            }
                            else {
                                if (nm === "rating") {
                                    val = input.value;
                                    if (val > 5) {
                                        error.ratingerr = "Rating should not exceed 5";
                                    }
                                    else {
                                        error.ratingerr = "";
                                    }
                                }

                            }
                        }
                    }
                }
            }
        }
        this.setState({ error, [nm]: val })

    }

   /* handleOption= selectedOption => {
        this.setState({ selectedOption });
        console.log('Option selected:',selectedOption);
      };*/
      
      handleOption(e) {
        console.log("Selected!");
        this.setState({ selectedOption: e.target.value });
        console.log(this.state.selectedOption);
      }
      handleOption1(e) {
        console.log("Selected!!");
        this.setState({ selectedOption1: e.target.value });
        console.log(this.state.selectedOption1);
      }

    submitForm = (e) => {
        e.preventDefault();
        //console.log(this.state);
        let sign=JSON.parse(localStorage.getItem('data1'));
        console.log(sign.vid);
        fetch("http://localhost:8080/vaddproduct?cname="+this.state.selectedOption+"&ctype="+this.state.selectedOption1+"&vid="+sign.vid+"&pname="+this.state.title+"&pdesc="+this.state.describe+"&psize="+this.state.size+"&pbrand="+this.state.brand+"&pprice=1"+this.state.price+"&pqty="+this.state.qty)
            .then(resp => resp.json())
            .then(data => this.setState({ st: data, success: true }));
        window.location.href="/vendor";
    }
    componentDidMount() {
        fetch('http://localhost:8080/getallcategory')
            .then(response => {
                return response.json();
            }).then(data => {
                console.log(data);
                this.setState({
                    cat: data,
                });
                console.log(this.state.cat);
            });
    }
    render() {
        return (
            <div className='register'>
                <div className='register_container'>
                    <form >
                        {/*<div><select value={selectedOption} onChange={this.handleOption} options={optionItems}>{optionItems}</select></div>*/}
                        <select value={this.state.value1} onChange={this.handleOption}>{ this.state.cat.map((options) => (<option value1={options.cname}>{options.cname}</option>))}</select>
                        <select value={this.state.value2} onChange={this.handleOption1}>{ this.state.cat.map((options) => (<option value2={options.ctype}>{options.ctype}</option>))}</select>
                        <h5>Product Title</h5><input type='text' name="title" value={this.state.title} onChange={this.handleChange} /><br />
                        <h5>Description</h5><input type='text' name="describe" value={this.state.describe} onChange={this.handleChange} /><br />
                        <h5>Size</h5><input type='text' name="size" value={this.state.size} onChange={this.handleChange} /><br />
                        <h5>Brand</h5><input type='text' name="brand" value={this.state.brand} onChange={this.handleChange} /><br />
                        <h5>Quantity</h5><input type='number' name="qty" value={this.state.qty} onChange={this.handleChange} /><br />
                        <h5>Price</h5><input type='float' name="price" value={this.state.price} onChange={this.handleChange} /><br />
                        <Link to="/vendor"> <button className='innerbutton' type="submit" value="Submit" onClick={this.submitForm}>Add Product</button></Link><br />
                    </form>
                    <span>{this.state.error.titleerr}{this.state.error.describeerr}{this.state.error.sizeerr}{this.state.error.branderr}<br />
                        {this.state.error.imageerr}{this.state.error.priceerr}</span>
                </div>
            </div>

        )
    }
}