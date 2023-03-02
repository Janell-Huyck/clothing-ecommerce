import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return incrementItemQuantity(cartItems, cartItemToAdd);
    } else {
        return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
    }};

const incrementItemQuantity = (cartItems, cartItemToIncrement) => {
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToIncrement.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
        );
    }  

const decrementItemQuantity = (cartItems, cartItemToDecrement) => {
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToDecrement.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
        );
    }

const sumCartValue = (cartItems) => {
    return cartItems.reduce((acc, cartItem) => acc + cartItem.quantity * cartItem.price, 0);
}


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    setCartItems: () => {},
    addItemToCart: () => {},
    itemCount: 0,
    addItem: () => {},
    removeItem: () => {},
    clearItemFromCart: () => {},
    totalCartValue: 0,
    updateCartValue: () => {}
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

    const addItem = (cartItemToIncrement) => {
        const newCartItems = incrementItemQuantity(cartItems, cartItemToIncrement);
        setCartItems(newCartItems);
    }

    const removeItem = (cartItemToDecrement) => {
        const newCartItems = decrementItemQuantity(cartItems, cartItemToDecrement);
        setCartItems(newCartItems);
    }

    const clearItemFromCart = (cartItemToRemove) => {
        const newCartItems = cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
        setCartItems(newCartItems);
    }

    const updateCartValue = (cartItems) => {
        const newCartValue = sumCartValue(cartItems);
        setTotalCartValue(newCartValue);
    }

    useEffect(() => {
        setItemCount(cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0));
        }, [cartItems]);

    
    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
        itemCount,
        addItem,
        removeItem,
        clearItemFromCart,
        totalCartValue,
        updateCartValue
    };

   return (
       <CartContext.Provider value={value}>
           {children}
       </CartContext.Provider>
   );
}