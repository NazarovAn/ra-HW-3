import React from 'react'

export default function Typing(props) {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name"><i className="fa fa-circle online"></i>{ props.message.from.name }</span>
        <span className="message-data-time">{ props.message.time }</span>
      </div>
      <div style={{color: 'gray', opacity: '0.5', paddingLeft: '1rem'}}>
        Typing...
      </div>
    </li>
  )
}
