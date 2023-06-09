import { NavLink } from 'react-router-dom';

export default function Header() {
  return(
    <header className="header">
      <div className="container">
        <ul className='header__links list'>
          <li className='header__link'>
            <NavLink 
              to='/'
              className={({isActive}) =>
                isActive ? 'link active' : 'link'
              }
            >
              Задание 1
            </NavLink>
          </li>
          <li className='header__link'>
            <NavLink 
              to='/task2'
              className={({isActive}) =>
                isActive ? 'link active' : 'link'
              }
            >
              Задание 2
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}
