import { useContext } from 'react';
import { AuthContext } from '../context/AuthContextProvider';

export const useAuth = () => useContext(AuthContext);
