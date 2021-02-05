//feature
import data from './data.json'
import React, { Component } from 'react'
import Products from './components/Products'
import Filter from './components/Filter'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       products:data.products,
       size:"",
       sort:""
    }
  }

  filterProducts=(event)=>{
    if(event.target.value===""){
      this.setState({
        size:event.target.value,
        products:data.products
      })
    }
    else{
     this.setState({
       size:event.target.value,
       products:data.products.filter(product=>product.availableSizes.indexOf(event.target.value)>=0)
       
     })
    }
  }
  sortProducts=(event)=>{
    const sort=event.target.value
    this.setState((state)=>({
     sort:sort,
     products:this.state.products.slice().sort((a,b)=>
        sort==='lowest'? 
        a.price>b.price?
           1:-1
        :sort==='highest'?
        a.price<b.price?
           1:-1
        :a._id>b._id?
           1:-1
     )
    })
    )}
  
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">My Shopping</a>
        </header>
        <main>
          <Filter count={this.state.products.length} 
          size={this.state.size}
          sort={this.state.sort}
          filterProducts={this.filterProducts}
          sortProducts={this.sortProducts}
          />
        <div className="content">
          <div className="main">
          <Products products={this.state.products} />
          </div>
          <div className="sidebar">Cart Items </div>
        </div>
        </main>
        <footer>
          All rights are reserved
        </footer>
      
      </div>
    );
  }
  }


export default App


