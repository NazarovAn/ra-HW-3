import React from 'react'
import { useState } from 'react'
import Input from './Input'
import Stars from './Stars'
import './FirstHW.css'

export default function FirstHW() {
  const [count, setCount] = useState(3);
  return (
    <div className="first__hw">
      <Input onSubmit={ setCount } />
      <Stars count={ count } />
    </div>
  )
}
