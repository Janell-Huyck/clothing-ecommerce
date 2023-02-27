import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext } from 'react'



import { ReactComponent as CrownLogo } from '../../assets/crown.svg'

import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { UserContext } from '../../contexts/user.context'
import { signOutAuthUser } from '../../utils/firebase/firebase.utils'

import './navigation.styles.scss'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)

    return (
      <Fragment>
        <div className = "navigation">
          <Link className='logo-container' to='/'>
            <CrownLogo className='logo' />
          </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/'>
              Home
            </Link>
            <Link className='nav-link' to='/shop'>
              Shop
            </Link>
            { currentUser ? (
              <span className='nav-link' onClick={ signOutAuthUser }>
                Sign Out
              </span>
              ) : (
              <Link className='nav-link' to='/auth'>
                Sign In
              </Link>)
            }
            <CartIcon />
          </div>
          <CartDropdown />
        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation