import React from 'react'
import PropTypes from 'prop-types'
import { ProductImages } from '../containers/App'
import CartIcon from '../components/Icons/CartIcon'
import CloseIcon from '../components/Icons/CloseIcon'
import styles from './Cart.css'
import CartProduct from './CartProduct';

const Cart = ({ products, total, onCheckoutClicked, onCloseCart}) => {
  const hasProducts = products.length;


  const nodes = (
    products.map(product =>
      <CartProduct product={product}/>
    )
  )




  const cartItems = !hasProducts ? (
    <div className={styles.CartItems}>
      <div className={styles.CartIcon}>
        <CartIcon
          fill='#BDBDBD'
          width='100%'
          height='100%' />
      </div>
      <div>
        <p className={styles.EmptyCartMsg}>Please add some products</p>
        <p className={styles.EmptyCartMsg}>to your cart.</p>
      </div>
    </div>
  ) : (
    <div>{nodes}</div>
  )


  const cartPricing = (label, cost) => hasProducts ? (
    <div className={styles.CartAmounts}>
      <p className={styles.CartTotalLabel}>{label}</p>
      {cost === '' || cost === '--' || cost === null ? (
        <p className={styles.CartTotalAmount}>{cost}</p>
      ) : (
        <p className={styles.CartTotalAmount}>&#36;{cost}</p>
      )}
    </div>
  ) : (
    null
  )

  const checkoutBtn = hasProducts ? (
    <button
      className={styles.CheckoutBtn}
      onClick={onCheckoutClicked}
      disabled={hasProducts ? '' : 'disabled'}>
      Checkout
    </button>
  ) : (
    null
  )

  return (
    <div>
      <div className={styles.CartContainer}>
        <div className={styles.Cart}>
          <div className={styles.CartInner}>

            <div className={styles.CartTopRow}>
              <button
                className={styles.CloseIcon}
                onClick={onCloseCart}>
                <CloseIcon
                  stroke='#CBCBCB'
                  width='100%'
                  height='100%' />
              </button>
            </div>

            <div className={styles.CartBtmRow} style={hasProducts ? null : { height: '95%' }}>
              <h3 className={styles.CartTitle}>Your Cart</h3>
              <hr className={styles.CartHR}></hr>
              {cartItems}

              {hasProducts ? (<hr className={styles.CartHR} style={ {marginTop: '0'} }></hr>) : null}

              <div style={{ marginBottom: '2rem' }}>{cartPricing('Subtotal', total)}</div>
              {cartPricing('Taxes', (total * .0806).toFixed(2))} {/* Calculate Sales tax*/}
              {hasProducts ? (<hr className={styles.CartHR}></hr>) : null}
              {cartPricing('Total', (parseFloat(total) + (total * .0806)).toFixed(2))}
            </div>
          </div>
          {checkoutBtn}
        </div>
      </div>
    </div>
  )
}


Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
