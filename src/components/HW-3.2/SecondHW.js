import React from 'react'
import data from './data/etsy.json'
import './SecondHW.css'
import Listing from './Listing'

export default  function SecondHW() {
  return (
    <div className="second__hw">
      <Listing items={ data } />
    </div>
  )
}