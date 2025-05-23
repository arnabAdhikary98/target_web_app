import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
    const [cartItems, setCartItems] = useState(() => {
        // Load cart from localStorage on initial render
        const savedCart = localStorage.getItem('targetCart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    // Update localStorage whenever cart changes
    useEffect(() => {
        localStorage.setItem('targetCart', JSON.stringify(cartItems));
        
        // Calculate cart count and total
        const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
        const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
        
        setCartCount(itemCount);
        setCartTotal(totalPrice);
    }, [cartItems]);

    // Add item to cart
    const addToCart = (product) => {
        setCartItems(prevItems => {
            // Check if item already exists in cart
            const existingItemIndex = prevItems.findIndex(item => 
                item.id === product.id && item.category === product.category
            );
            
            if (existingItemIndex >= 0) {
                // Item exists, increase quantity
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex].quantity += 1;
                return updatedItems;
            } else {
                // Item doesn't exist, add new item with quantity 1
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    // Remove item from cart
    const removeFromCart = (id, category) => {
        setCartItems(prevItems => 
            prevItems.filter(item => !(item.id === id && item.category === category))
        );
    };

    // Update item quantity
    const updateQuantity = (id, category, quantity) => {
        if (quantity <= 0) {
            removeFromCart(id, category);
            return;
        }
        
        setCartItems(prevItems => 
            prevItems.map(item => 
                (item.id === id && item.category === category) 
                    ? { ...item, quantity } 
                    : item
            )
        );
    };

    // Clear cart
    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider 
            value={{ 
                cartItems, 
                cartCount, 
                cartTotal, 
                addToCart, 
                removeFromCart, 
                updateQuantity, 
                clearCart 
            }}
        >
            {children}
        </CartContext.Provider>
    );
} 