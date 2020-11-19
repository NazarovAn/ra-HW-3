import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  const [visibility, setVisibility] = useState(true);
  const activeStyle = { color: 'rgb(100, 100, 100)' };
  
  return (
    <div className="navigation">
      <i className="material-icons nav_icon" onClick={ () => setVisibility(visibility ? false : true) }>
        { visibility? 'navigate_before' : 'navigate_next' }
      </i>
      <div className={ `navigation__list ${ visibility ? '' : 'hidden' }` }>
        <NavLink to="/first" activeStyle={ activeStyle }>Stars Homework</NavLink>
        <NavLink to="/second" activeStyle={ activeStyle }>Second</NavLink>
        <NavLink to="/third" activeStyle={ activeStyle }>Third</NavLink>
      </div>
    </div>
  )
}
