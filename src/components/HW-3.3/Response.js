import React from 'react'

export default function Response(props) {
  return (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{ props.message.time }</span> &nbsp; &nbsp;
        <span className="message-data-name">{ props.message.from.name }</span>
        <i className="fa fa-circle me"></i>
      </div>
      <div className="message other-message float-right">
        { props.message.text }
      </div>
    </li>
  )
}
