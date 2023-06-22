import { useContext } from 'react';
import { CheckoutItemContainer, ImageContainer, Image, Name, Quantity, Price, Arrow, Value, RemoveButton } from './checkout-item.styles.jsx';

import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

    const addItemToCartHandler = () => { addItemToCart(cartItem) };
    const removeItemFromCartHandler = () => { removeItemFromCart(cartItem) };
    const clearItemFromCartHandler = () => { clearItemFromCart(cartItem) };

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <Image src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={removeItemFromCartHandler}>
                    &#10094;
                </Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemToCartHandler}>
                    &#10095;
                </Arrow>
            </Quantity>
            <Price>{price}</Price>
            <RemoveButton onClick={clearItemFromCartHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
}

export default CheckoutItem;
