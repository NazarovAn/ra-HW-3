import React from 'react'
import Item from './Item'

export default function Listing(props) {
  const { items } = props;
  return (
    <div className="item-list">
      { items.map((item) =>
        item.state === 'active' ? 
          <Item 
            data={{
              url: item.url, 
              image: item.MainImage,
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
