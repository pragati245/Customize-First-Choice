import React from 'react';
import '../register.css';
import { Link } from 'react-router-dom';
import 'react-dropdown/style.css';
import { Form } from "react-bootstrap";

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
            selectedOption: "",
            selectedOption1: "",
            p_image: null,
            error: {

                titleerr: "",
                describeerr: "",
                sizeerr: "",
                branderr: "",
                qtyerr: "",
                priceerr: "",
                ratingerr: ""
            },
            c_types: []
        }
        this.handleOption = this.handleOption.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);

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
        this.setState({ selectedOption: e.target.value });
    }
    // convertImage = async (imageBlobUrl, imageName) => {
    //     const formData = new FormData();
    //     let blob = await fetch(imageBlobUrl).then((r) => r.blob());
    //     var file = new File([blob], imageName);
    //     formData.append("file", file);
    //     console.log(formData);
    //     return formData
    //     // let res = await this.uploadImage(formData);
    //     // return res.data;
    // };
    async  convertToFile(customerFabricImg, fabricImgType, fabricImgName) {
        if (fabricImgType === undefined) {
            return null
        }
        let file = await fetch(customerFabricImg)
            .then((r) => r.blob())
            .then(
                (blobFile) =>
                    new File([blobFile], fabricImgName, { type: fabricImgType })
            );

        return file;
    }
    async onChangeImage(e) {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            let fileImage = await this.convertToFile(URL.createObjectURL(img),"png","image")
            const formData = new FormData();
            formData.append("file", fileImage);
            console.log(fileImage)
            const reqData = {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                body:  formData
            };
    
            await fetch(process.env.REACT_APP_BASE_URL + "/upload_product_image", reqData)
                .then(resp => resp.json())
                .then(data => this.setState({ p_image: data })).catch((error) => {
                    console.log(error)
                })
        } 
    }

        submitForm = async (e) => {
            e.preventDefault();
            let sign = JSON.parse(localStorage.getItem('data1'));
            await fetch(process.env.REACT_APP_BASE_URL + "/product/vaddproduct?c_id=" +
                this.state.selectedOption + "&v_id=" +
                sign.v_id + "&pname=" +
                this.state.title + "&pdesc=" +
                this.state.describe + "&psize=" +
                this.state.size + "&pbrand=" +
                this.state.brand + "&pprice=" +
                this.state.price + "&pqty=" +
                this.state.qty)
                .then(resp => resp.json())
                .then(data => this.setState({ st: data, success: true })).catch((error) => {
                    console.log(error);
                })
            window.location.href = "/vendor";
        }
        componentDidMount() {
            fetch(process.env.REACT_APP_BASE_URL + '/category/getallcategory')
                .then(response => {
                    return response.json();
                }).then(data => {
                    console.log(data);
                    const cType = new Set();
                    data.map(c => {
                        cType.add(c.c_type)
                    })
                    let ar = []
                    cType.forEach((c_type) => {
                        ar = [...ar, c_type]
                    })
                    this.setState({ c_types: ar })
                    this.setState({
                        cat: data,
                    });
                    console.log(this.state.cat);
                });
        }
        render() {
            console.log(this.state.p_image)
            return (
                <div className='register'>
                    <div className='register_container'>
                        {/* <form >
                        <select
                            value={this.state.selectedOption}
                            onChange={this.handleOption}>
                            {this.state.cat.map((options) => (
                                <option value={options.c_id}>{options.c_name} - {options.c_type}</option>
                            ))}
                        </select>

                        <h5>Product Title</h5><input type='text' name="title" value={this.state.title} onChange={this.handleChange} /><br />
                        <h5>Description</h5><input type='text' name="describe" value={this.state.describe} onChange={this.handleChange} /><br />
                        <h5>Size</h5><input type='text' name="size" value={this.state.size} onChange={this.handleChange} /><br />
                        <h5>Brand</h5><input type='text' name="brand" value={this.state.brand} onChange={this.handleChange} /><br />
                        <h5>Quantity</h5><input type='number' name="qty" value={this.state.qty} onChange={this.handleChange} /><br />
                        <h5>Price</h5><input type='float' name="price" value={this.state.price} onChange={this.handleChange} /><br />
                        <Link to="/vendor"> <button className='innerbutton' type="submit" value="Submit" onClick={this.submitForm}>Add Product</button></Link><br />
                    </form> */}
                        {/* <select
                        value={this.state.selectedOption}
                        onChange={this.handleOption}>
                        {this.state.cat.map((options) => (
                            <option value={options.c_id}>{options.c_name} - {options.c_type}</option>
                        ))}
                    </select> */}
                        <Form.Group className="mb-3">
                            <Form.Label>Select Category Name-Type</Form.Label>
                            <Form.Select
                                value={this.state.selectedOption}
                                onChange={this.handleOption}>
                                <option>Select</option>
                                {this.state.cat.map((options) => (
                                    <option value={options.c_id}>{options.c_name} - {options.c_type}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Product Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Product Title" name="title" value={this.state.title} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label> Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter Description" name="describe" value={this.state.describe} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label> Size</Form.Label>
                            <Form.Control type="text" placeholder="Enter Size" name="size" value={this.state.size} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label> Brand</Form.Label>
                            <Form.Control type="text" placeholder="Enter Brand Name" name="brand" value={this.state.brand} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label> Quantity</Form.Label>
                            <Form.Control type="number" placeholder="Enter Quantity" name="qty" value={this.state.qty} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label> Price</Form.Label>
                            <Form.Control type="Float" placeholder="Enter Price" name="price" value={this.state.price} onChange={this.handleChange} />
                        </Form.Group>
                        {/* <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Product Image</Form.Label>
                            <Form.Control type="file" onChange={this.onChangeImage} />
                        </Form.Group> */}
                        <Link to="/vendor"> <button className='innerbutton' type="submit" value="Submit" onClick={this.submitForm}>Add Product</button></Link><br />
                        <span>{this.state.error.titleerr}{this.state.error.describeerr}{this.state.error.sizeerr}{this.state.error.branderr}<br />
                            {this.state.error.imageerr}{this.state.error.priceerr}</span>
                    </div>
                </div >

            )
        }
    }