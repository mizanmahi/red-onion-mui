import { useEffect, useState } from 'react';
import { axiosInstance } from '../utils/axiosInstance';

const useMealById = (mealId) => {
   const [meal, setMeal] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState('');

   useEffect(() => {
      const fetchMeals = async () => {
         setLoading(true);
         try {
            const { status, data } = await axiosInstance.get(`meal/${mealId}`);
            if (status === 200) {
               setMeal(data);
               setLoading(false);
               setError('');
            }
         } catch (error) {
            setLoading(false);
            setError(error.response.data.message);
         }
      };

      fetchMeals();
   }, [mealId]);

   return {
      meal,
      loading,
      error,
   };
};

export default useMealById;
