import { useContext } from 'react';
import './checkout.styles.scss';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component.jsx';

const Checkout = () => {
    const { cartItems, totalCartValue } = useContext(CartContext);

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => {
                    return (
                    <span key={cartItem.id}>
                        <CheckoutItem cartItem={cartItem} />
                    </span>
                )})
            }
            <div className="total">
                <span>TOTAL: ${totalCartValue}</span>
            </div>
        </div>
    );}

export default Checkout