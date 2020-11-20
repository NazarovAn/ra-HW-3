import React from 'react'

export default function ItemDetails(props) {
  function checkTitle(title) {
    return title.length > 50 ? `${ title.slice(0,50) }...` : title
  }
  
  function checkPrice(price, currency) {
    switch (currency) {
      case 'USD':
        return `$${ price }`
      case 'EUR':
        return `€${ price }`
      default:
        return `${ price } ${ currency }`
    }
  }

  function checkQuantity(quantity) {
    if (quantity < 11) {
      return 'level-low'
    } if (quantity < 21) {
      return 'level-medium'
    }
    return 'level-high'
  }

  return (
    <div className="item-details">
      <p className="item-title">{ checkTitle(props.data.title) }</p>
      <p className="item-price">{ checkPrice(props.data.currency, props.data.price) }</p>
      <p className={ `item-quantity ${ checkQuantity(props.data.quantity) }`}>{ props.data.quantity } left</p>
    </div>
  )
}
