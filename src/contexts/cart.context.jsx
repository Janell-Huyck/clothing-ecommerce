import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToAdd.id
    );
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
            );
    } else {
        return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
    }};


const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );
    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    } else {
        return cartItems.map((cartItem) =>
            cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
            );
    }
}

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    itemCount: 0,
    totalCartValue: 0,
   });

export const CartProvider = ({ children }) => {
   const [isCartOpen, setIsCartOpen] = useState(false);
   const [cartItems, setCartItems] = useState([]);
   const [itemCount, setItemCount] = useState(0);
   const [totalCartValue, setTotalCartValue] = useState(0);

   const addItemToCart = (cartItemToAdd) => {
        const newCartItems = addCartItem(cartItems, cartItemToAdd);
        setCartItems(newCartItems);
   };

   const removeItemFromCart = (cartItemToRemove) => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove);
        setCartItems(newCartItems);
    };

    const clearItemFromCart = (cartItemToClear) => {
        const newCartItems = clearCartItem(cartItems, cartItemToClear);
        setCartItems(newCartItems);
    }

    useEffect(() => {
        setItemCount(cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0));
        }, [cartItems]);

    useEffect(() => {
        const newCartValue = cartItems.reduce((acc, cartItem) => acc + cartItem.quantity * cartItem.price, 0);
        setTotalCartValue(newCartValue);
        }, [cartItems]);

    
    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart,
        cartItems,
        itemCount,
        totalCartValue,
    }
    return (
       <CartContext.Provider value={value}>
           {children}
       </CartContext.Provider>
   );
}