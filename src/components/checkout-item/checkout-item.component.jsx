import { useContext } from 'react';
import './checkout-item.styles.scss';

import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { addItem, removeItem, clearItemFromCart } = useContext(CartContext);

    const handleIncrement = () => {
        addItem(cartItem);
    }

    const handleDecrement = () => {
        if (cartItem.quantity === 1) {
            clearItemFromCart(cartItem);
        }
        else {
            removeItem(cartItem);
        }
    }

    const handleClearItemFromCart = () => {
        clearItemFromCart(cartItem);
    }


    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">The name: {name}</span><br/>
            <span className="increment" onClick={handleIncrement}>&#10095;</span>
            <span className="quantity">Quantity: {quantity}</span><br/>
            <span className="decrement" onClick={handleDecrement}>&#10094;</span>
            <span className="price">Price: {price}</span><br/>
            <div className="remove-button" onClick={handleClearItemFromCart}>&#10005;</div>
        </div>
    );
}

export default CheckoutItem;
