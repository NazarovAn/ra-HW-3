import React from 'react'
import shortid from 'shortid'
import PropTypes from 'prop-types'
import Star from './Star'

function Stars(props) {
  const getStars = (count) => {
    if (Number.isInteger(count) && count > 0 && count < 6) {
      return new Array(count).fill('').map(() => <Star key={ shortid.generate() }/>)
    }
    return null
  }

  return (
    <ul className="card_body_stars">
      { getStars(props.count) }
    </ul>
  )
}

Stars.propTypes = {
  count: PropTypes.number.isRequired,
}

export default Stars