import { createContext, useState, useEffect } from "react";



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
    itemCount: 0,
   });

export const CartProvider = ({ children }) => {
   const [isCartOpen, setIsCartOpen] = useState(false);
   const [cartItems, setCartItems] = useState([]);
   const [itemCount, setItemCount] = useState(0);

   const addItemToCart = (cartItemToAdd) => {
        const newCartItems = addCartItem(cartItems, cartItemToAdd);
        setCartItems(newCartItems);
   };

   useEffect(() => {
    setItemCount(cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0));
    }, [cartItems]);
    
    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
        itemCount
    };

   return (
       <CartContext.Provider value={value}>
           {children}
       </CartContext.Provider>
   );
}