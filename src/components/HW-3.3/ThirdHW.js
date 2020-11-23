import React from 'react'
import './ThirdHW.css'
import MessageHistory from './MessageHistory'
import messages from './messages'

export default function ThirdHW() {
  return (
    <div className="third__hw">
      <div className="clearfix mh_container">
        <div className="chat">
          <div className="chat-history">
            <MessageHistory list={ messages } />
          </div>
        </div>
      </div>
    </div>
  )
}

MessageHistory.defaultProps = {
  list: []
}
