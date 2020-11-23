import React, { useState } from 'react'

export default function Input(props) {
  const [value, setValue] = useState('');

  function submitHandler(ev) {
    ev.preventDefault();
    props.onSubmit(parseInt(value, 10));
    setValue('');
  }

  return (
    <form onSubmit={ submitHandler } className="fw__form">
      <input value={ value } onChange={ (ev) => setValue(ev.currentTarget.value) } className="fw__input" />
      <button type="submit" className="fw__button">Submit</button>
    </form>
  )
}
