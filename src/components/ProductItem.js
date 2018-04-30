import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import styles from './ProductItem.css'
import { ProductImages } from '../img/ProductImages'



const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className={styles.ProductItem}>
    <div className={styles.ProductImg} style={ {backgroundImage: `url(${ProductImages[product.id - 1]})`} }></div>
    <div className={styles.ProductInfo}>
      <Product
        title={product.title}
        price={product.price}
        inventory={product.inventory} />
      <button
        className={styles.AddToCartBtn}
        onClick={onAddToCartClicked}
        disabled={product.inventory > 0 ? false : true}>
        {product.inventory > 0 ? 'ADD TO CART' : 'SOLD OUT'}
      </button>
    </div>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
