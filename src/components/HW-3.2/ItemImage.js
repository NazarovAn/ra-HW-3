import React from 'react'
import PropTypes from 'prop-types'

export default function ItemImage(props) {
  return (
    <div className="item-image">
      <a href={ props.itemUrl }>
        <img src={ props.imageUrl } alt={ props.imageId }/>
      </a>
    </div>
  )
}

ItemImage.propTypes = {
  itemUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageId: PropTypes.number,
}