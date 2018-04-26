import React from 'react'
import PropTypes from 'prop-types'
import styles from './Product.css'
const Product = ({ price, inventory, title }) => (
  <div className={styles.Product}>
    <div className={styles.ProductTopRow}>
      <h3 className={styles.ProductTitle}>{title}</h3>
      <h4 className={styles.ProductPrice}> &#36;{price}</h4>
    </div>
    <p className={styles.ProductInv}>{inventory ? `${inventory} Remaining` : null}</p>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
