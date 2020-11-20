import React from 'react'
import ItemImage from './ItemImage'
import ItemDetails from './ItemDetails'
import PropTypes from 'prop-types'

export default function Item(props) {
  return (
    <div className="item">
      <ItemImage data={ props.imageData } />
      <ItemDetails data={ props.itemDetales } />
    </div>
  )
}

Item.propTypes = {
  imageData: PropTypes.exact({
    itemUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageId: PropTypes.number,
  }),
  itemDetales: PropTypes.exact({
    title: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }),
}
