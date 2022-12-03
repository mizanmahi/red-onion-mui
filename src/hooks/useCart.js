import { useContext } from 'react';
import { CartContext } from '../context/CartContextProvider';

export const useCart = () => useContext(CartContext);
