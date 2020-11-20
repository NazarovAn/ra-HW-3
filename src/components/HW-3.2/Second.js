import React from 'react'
import data from './data/etsy'
import './Second.css'
import Listing from './components/Listing'

export default  function Second() {
  return (
    <Listing items={ data } />
  )
}