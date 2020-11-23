import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message'
import Response from './Response'
import Typing  from './Typing'

export default function MessageHistory(props) {
  const handleData = (message) => {
    return { name: message.from.name, time: message.time, text: message.text }
  }

  return (
    <ul className="mh__list">
      {
        props.list.map((message) => {
          switch (message.type) {
           case 'message':
             return <Message data={ handleData(message) } key={ message.id } />
           case 'response':
             return <Response data={ handleData(message) } key={ message.id } />
           case 'typing':
             return <Typing data={ handleData(message) } key={ message.id } />
           default:
             return null
          }
        })
      }
    </ul>
  )
}

MessageHistory.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      from: PropTypes.object.isRequired,
      type: PropTypes.oneOf(['response', 'message', 'typing']),
      time: PropTypes.string.isRequired,
      text: PropTypes.string
    })
  )
}
