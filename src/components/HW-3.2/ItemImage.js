import React from 'react'

export default function ItemImage(props) {
  return (
    <div className="item-image">
      <a href={ props.data.itemUrl }>
        <img src={ props.data.imageUrl } alt={ props.data.imageId }/>
      </a>
    </div>
  )
}