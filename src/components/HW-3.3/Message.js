import React from 'react'

export default function Message(props) {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name"><i className="fa fa-circle online"></i>{ props.message.from.name }</span>
        <span className="message-data-time">{ props.message.time }</span>
      </div>
      <div className="message my-message">
        {props.message.text}
      </div>
    </li>
  )
}
