import React from 'react'
import shortid from 'shortid'
import PropTypes from 'prop-types'
import Star from './Star'

function Stars(props) {
  
  function getStars(count) {
    if (Number.isInteger(count) && count > 0 && count < 6) {
      return new Array(count).fill('').map(() => <li key={ shortid.generate() }><Star /></li>)
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

Stars.defaultProps = {
  count: 1,
}

export default Stars