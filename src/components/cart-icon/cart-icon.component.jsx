import { useContext } from 'react';   
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'; 

import './cart-icon.styles.scss';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, itemCount } = useContext(CartContext);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div className="cart-icon-container" onClick={toggleCart}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    );
    };
export default CartIcon;