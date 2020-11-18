import React, { useState } from 'react'

export default function Input(props) {
  const [value, setValue] = useState('');

  function submitHandler(ev) {
    ev.preventDefault();
    props.onSubmit(parseInt(value, 10));
    setValue('');
  }

  return (
    <form onSubmit={ submitHandler }>
      <input value={ value } onChange={ (ev) => setValue(ev.currentTarget.value) } />
      <button type="submit">Submit</button>
    </form>
  )
}
