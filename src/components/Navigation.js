import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
  const [visibility, setVisibility] = useState(true);
  const activeStyle = { color: 'rgb(100, 100, 100)' };
  
  return (
    <div className="navigation">
      <i className="material-icons nav_icon" onClick={ () => setVisibility(visibility ? false : true) }>
        { visibility? 'navigate_before' : 'navigate_next' }
      </i>
      <div className={ `navigation__list ${ visibility ? '' : 'hidden' }` }>
        <NavLink to="/first" activeStyle={ activeStyle }>Рейтинг фильмов</NavLink>
        <NavLink to="/second" activeStyle={ activeStyle }>Список предложений</NavLink>
        <NavLink to="/third" activeStyle={ activeStyle }>История сообщений в чате</NavLink>
      </div>
    </div>
  )
}
