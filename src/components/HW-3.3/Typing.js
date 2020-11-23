import React from 'react'

export default function Typing(props) {
  const { name, time } = props.data;
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name"><i className="fa fa-circle online"></i>{ name }</span>
        <span className="message-data-time">{ time }</span>
      </div>
      <div style={{color: 'gray', opacity: '0.5', padding: '1rem'}}>
        Typing...
      </div>
    </li>
  )
}
