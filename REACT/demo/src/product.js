import React, { Component } from 'react';
import axios from 'axios';
export class  Product extends Component {
    constructor(props){
        super(props);
        this.state={
            product:[]
        }
    }
    getAllProduct(){
        axios.get("http://localhost:3000/products")
        .then((response)=>{void
        this.setState({
            product:response.data
        }).catch((error)=>{
            console.log("cannot fetch product",error);
        })
    })
    }

    render(){
    const products = this.state.product.map
    ((products)=>{
        return(
            <tr>
                <td>{products.id}</td>
                <td>{products.title}</td>
                <td>{products.price}</td>
            </tr>
        )
    })

    return(
        <div>
            <h2>Products</h2>
            <table>
                <thead>
                    <td>Product ID</td>
                    <td>Product Name</td>
                    <td>Product Price</td>
                </thead>
                <tbody>
                    {products}
                </tbody>
            </table>
        </div>
    )
}
}

export default Product;
