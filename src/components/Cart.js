import React, { Component } from 'react'
import formatCurrency from '../Util'

export default class Cart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email:"",
            name:"",
            address:"",
            showCheckout:false
        }
    }
    createOrder=(e)=>{
        e.preventDefault();
        const order={
            email:this.state.email,
            name:this.state.name,
            address:this.state.address,
            cartItems:this.props.cartItems
        }
        this.props.createOrder(order)
       
    }
    
    
    handleInput=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    clickProceed=()=>{
        this.setState({
            showCheckout:true
        })
    }
    render() {
        const { cartItems } = this.props
        return (
            <div>
                {cartItems.length === 0 ? (
                    <div className="cart cart-header">
                        Cart is empty
                    </div>) : (
                        <div className="cart cart-header">
                            You have {cartItems.length} items in the cart
                        </div>)}
                <div className="cart">
                    <ul className="cart-items">
                        {cartItems.map(item => (
                            <li key={item._id}>
                                <img src={item.image} alt={item.title}></img>
                                <div>
                                    <div>{item.title}</div>
                                    <div className="right">
                                        {formatCurrency(item.price)} x {item.count} {" "}
                                        <button className="button" onClick={() => this.props.removeItems(item)}>Remove </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                   
                </div>
                {cartItems.length!==0 &&(
                    <div>
                    <div className="cart">
                        <div className="total">
                            
                            <div>
                                Total:{" "}
                                {formatCurrency(cartItems.reduce((a,b)=>a+b.price*b.count,0))}
                            </div>
                            <button onClick={this.clickProceed} className="button primary">Proceed</button>
                        </div>
                    </div>
                        {this.state.showCheckout &&(
                                <div className="cart">
                                    <form onSubmit={this.createOrder}>
                                        <ul className="form-container"> 
                                            <li>
                                             <label>Email:</label>
                                             <input name="email" type="email"
                                              required 
                                              onChange={this.handleInput} >
                                              </input>
                                            </li>
                                            <li>
                                             <label>Name:</label>
                                             <input name="name" type="text"
                                              required 
                                              onChange={this.handleInput} >
                                              </input>
                                            </li>
                                            <li>
                                             <label>Address:</label>
                                             <input name="address" type="text"
                                              required 
                                              onChange={this.handleInput} >
                                              </input>
                                            </li>
                                            <li>
                                             <button className="button primary" type="submit">Checkout</button>
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                         )}
                         </div>
                    )}
                   
                   </div> 
          

        )
    }
}
