import { createContext, useState } from "react";

const addCartItem = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) => 
            cartItem.id === cartItemToAdd.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            :cartItem
        );
    } else {
        return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
    }};


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    setCartItems: () => {},
    addItemToCart: () => {},
   });

export const CartProvider = ({ children }) => {
   const [isCartOpen, setIsCartOpen] = useState(false);
   const [cartItems, setCartItems] = useState([]);

   const addItemToCart = (cartItemToAdd) => {
        const newCartItems = addCartItem(cartItems, cartItemToAdd);
        setCartItems(newCartItems);
   };

    
    
    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
    };

   return (
       <CartContext.Provider value={value}>
           {children}
       </CartContext.Provider>
   );
}