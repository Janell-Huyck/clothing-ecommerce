import { Outlet } from 'react-router-dom'
import { Fragment, useContext } from 'react'

import { ReactComponent as CrownLogo } from '../../assets/crown.svg'

import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'
import { signOutAuthUser } from '../../utils/firebase/firebase.utils'

 import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles.jsx'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)
    return (
      <Fragment>
        <NavigationContainer>
          <LogoContainer to='/'>
            <CrownLogo className='logo' />
          </LogoContainer>
          <NavLinks>
            <NavLink to='/'>
              Home
            </NavLink>
            <NavLink to='/shop'>
              Shop
            </NavLink>
            <NavLink to='/checkout'>
              Check Out
            </NavLink>
            { currentUser ? (
              <NavLink as='span' onClick={ signOutAuthUser }>
                Sign Out
              </NavLink>
              ) : (
              <NavLink to='/auth'>
                Sign In
              </NavLink>)
            }
             <CartIcon />
          </NavLinks>
          {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation