import { useState } from 'react';
import { createContext } from 'react';


//@ Creating cart context
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
   const [cart, setCart] = useState([]);

   return (
      <CartContext.Provider value={{ cart, setCart }}>
         {children}
      </CartContext.Provider>
   );
};

export default CartContextProvider;
