import React from 'react'
import PropTypes from 'prop-types'

export default function ItemDetails(props) {
  return (
    <div className="item-details">
      <p className="item-title">{ props.title }</p>
      <p className="item-price">{ props.price }</p>
      <p className={ `item-quantity ${ props.level }`}>{ props.quantity } left</p>
    </div>
  )
}

ItemDetails.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
}