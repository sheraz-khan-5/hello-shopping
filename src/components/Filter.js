import React, { Component } from 'react'
import {filterProducts,sortProducts} from './redux/product/productActions'
import {connect} from 'react-redux'

 class Filter extends Component {
    render() {
        return (
            !this.props.filteredProducts?(
                <di>Loading...</di>
            ):(
            <div className="filter-container">
                <div className="filter-result" >
                    {this.props.filteredProducts.length} Products
                    </div>
                <div className="filter-sort">Order {" "}
                <select value={this.props.sort} onChange={(e)=>this.props.sortProducts(this.props.filteredProducts, e.target.value)}>
                   <option value="">Latest</option>
                    <option value="lowest">lowest</option>
                    <option value="highest">highest</option>
                </select>
                </div>
                <div className="filter-size">Filter {" "}
                <select value={this.props.size} 
                onChange={(e)=>this.props.filterProducts(this.props.products,e.target.value)}>
                    <option value="">All</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXl">XXL</option>
                    
                </select>
                </div>
                
            </div>
            )
           
        )
    }
}

export default connect((state)=>({
    size:state.products.size,
    sort:state.products.sort,
    products:state.products.items,
    filteredProducts:state.products.filteredItems,
}),
{
    filterProducts,
    sortProducts,
})(Filter);