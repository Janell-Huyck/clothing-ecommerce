import { useContext } from 'react';   import { CartContext } from '../../contexts/cart.context';

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, itemCount } = useContext(CartContext);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <CartIconContainer onClick={toggleCart}>
            <ShoppingIcon className="shopping-icon"/>
            <ItemCount>{itemCount}</ItemCount>
        </CartIconContainer>
    );
};
export default CartIcon;