import React from 'react'
import Item from './Item'

export default function Listing(props) {
  const { items } = props;
  return (
    <div className="item-list">
      { items.map((item) =>
        item.state === 'active' ? 
          <Item 
            imageData={{
              itemUrl: item.url, 
              imageUrl: item.MainImage.url_570xN,
              imageId: item.MainImage.listing_image_id,
            }}
            itemDetales={{
              title: item.title,
              currency: item.currency_code ,
              price: item.price,
              quantity: item.quantity,
            }} 
            key={ item.listing_id }
          /> :
          null
        )
      }
    </div>
  )
}

Listing.defaultProps = {
  items: []
}
