import React, { Component } from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import CartIcon from '../components/Icons/CartIcon'
import styles from './App.css'
import { connect } from 'react-redux'

import { getCartProducts } from '../reducers' // For the cart Button Sizing




class App extends Component {
  state = {
    hovering: false,
    cartModal: false,
    products: []
  }

  mouseEnter = () => {
    this.setState({ hovering: true });
  }
  mouseLeave = () => {
    this.setState({ hovering: false });
  }

  cartModalOpen = () => {
    this.setState({ cartModal: true });
  }
  closeHandler = () => {
    this.setState({ cartModal: false });
  }
 /*// CartBtnMsg = () => {
 //     productCount = this.props.products.length
 //      if(this.props.products.length == 0){
 //
 //    }return()}
 //    elseif(this.props.products.length == 1){
 //      return(<p>Your cart has 1 item</p>)
 //    }else if(this.props.products.length > 1){
 //      return(<p>Your cart has {this.props.products.length} items</p>)
 //    }
 //  }*/


  render() {
    const cartButton = (
      <button
        className={styles.CartTextLink}
        onClick={this.cartModalOpen}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}>
        <CartIcon
          fill={this.state.hovering ? '#407FC0' : '#292929'}
          width='17px'
          height='14px' />

        {!this.props.products.length ? <p>Your cart is empty</p> : <p>Your cart has {this.props.products.length} item
        {this.props.products.length > 1 ? "'s" : null}
        </p>}

      </button>
    )


    const cartModal = this.state.cartModal ? (
      <CartContainer onCloseCart={this.closeHandler}/>
    ) : (
      null
    )

    const cartModalBackdrop = this.state.cartModal ? (
      <div className={styles.cartModalBackdrop}></div>
    ) : (
      null
    )

    const cartModalFull  = (
      <div>
        <div
          className={styles.CartModalWrapper}
          style={{
            transform: this.state.cartModal ? 'translateY(0vh)' : 'translateY(100vh)',
            opacity: this.state.cartModal ? '1' : '0'
          }}>
          {cartModal}

        </div>

        <div
          className={styles.cartModalBackdropWrapper}
          style={ {opacity: this.state.cartModal ? '1' : '0'} }>
        {cartModalBackdrop}
      </div>


      </div>
    )

    return (
      <div>
        {cartModalFull}


        <div className={styles.App} >
          <div className={styles.NavBar}>
            <h2 className={styles.Title}>Acme Store</h2>

            {cartButton}
          </div>
          <hr />


          <ProductsContainer />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state)
})

export default  connect(
  mapStateToProps
)(App)
