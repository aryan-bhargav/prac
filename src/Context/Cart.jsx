import { useContext,createContext, useState } from "react";

export const cartContext = createContext(null);

// export const useCart =()=> {
//     const cart = useContext(cartContext);
// }

export const CartProvider = (props)=>{
    const [cartItems,setCartItems] = useState([])
    return (
        <cartContext.Provider value={{cartItems,setCartItems}}>
            {props.children}
        </cartContext.Provider>
    )
}