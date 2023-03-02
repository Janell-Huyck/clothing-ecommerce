import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/cart.context';

import './cart-dropdown.styles.scss';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
    const { cartItems, setIsCartOpen } = useContext(CartContext);

    const goToCheckout = () => {
        setIsCartOpen(false);
    }

    return (
        <div className="cart-dropdown-container">
             <div className="cart-items">
                {cartItems.map(item => <CartItem cartItem={item} key={item.id}/>)}
            </div>
            <Link className='nav-link' to='/checkout'>
                <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
            </Link>
        </div>
    );
}

export default CartDropdown;