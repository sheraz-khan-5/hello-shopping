//feature
import data from './data.json'
import React, { Component } from 'react'
import Products from './components/Products'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       products:data.products,
       size:"",
       sort:""
    }
  }
  
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">My Shopping</a>
        </header>
        <main>
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


