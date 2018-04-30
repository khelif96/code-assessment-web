import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cart.css'
import { ProductImages } from '../containers/App'

const CartProduct = ({product}) => (
  <div key={product.id}>
    <div className={styles.ProductItem}>
      <div className={styles.ProductImg} style={ {backgroundImage: `url(${ProductImages[product.id - 1]})`} }></div>
      <div className={styles.ProductInfo}>
        <h3 className={styles.ProductTitle}>{product.title}</h3>
        <h4 className={styles.ProductPrice}>&#36;{product.price}</h4>
        <button className={styles.ProductRemoveBtn}>Remove</button>
      </div>
    </div>
    <div className={styles.ProductQtyCtrls}>
      <button className={styles.ProductQtyMinus} disabled={product.quantity === 1 ? 'disabled' : ''}><p>-</p></button>
      <div className={styles.ProductQty}><p>{product.quantity}</p></div>
      <button className={styles.ProductQtyPlus}><p>+</p></button>
    </div>
  </div>
)

export default CartProduct;
