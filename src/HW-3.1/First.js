import React from 'react'
import { useState } from 'react'
import Input from './Input'
import Stars from './Stars'
import './First.css'

export default function First() {
  const [count, setCount] = useState(1);
  return (
    <div className="first__wrapper">
      <Input onSubmit={ setCount } />
      <Stars count={ count } />
    </div>
  )
}
