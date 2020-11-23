import React from 'react'
import ItemImage from './ItemImage'
import ItemDetails from './ItemDetails'

export default function Item(props) {
  const { url, image, title, price, quantity, currency } = props.data;

  const handlePrice = () => {
    switch (currency) {
      case 'USD':
        return `$${ price }`
      case 'EUR':
        return `€${ price }`
      default:
        return `${ price } ${ currency }`
    }
  }

  const handleLevel = () => {
    if (quantity < 11) {
      return 'level-low'
    } if (quantity < 21) {
      return 'level-medium'
    }
    return 'level-high'
  }

  return (
    <div className="item">
      <ItemImage 
        itemUrl={ url }
        imageUrl={ image.url_570xN }
        imageId={ image.listing_image_id }
      />
      <ItemDetails
        title={ title.length > 50 ? `${ title.slice(0,50) }...` : title }
        price={ handlePrice() }
        level={ handleLevel() }
        quantity={ quantity }
      />
    </div>
  )
}
