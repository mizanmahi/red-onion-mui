import { useEffect, useState } from 'react';
import { axiosInstance } from '../utils/axiosInstance';

const useMeals = (category) => {
   const [meals, setMeals] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState('');

   useEffect(() => {
      let url = 'meals';

      if (category) {
         url = `${url}/${category}`;
      }

      const fetchMeals = async () => {
         setLoading(true);
         try {
            const { status, data } = await axiosInstance.get(url);
            if (status === 200) {
               setMeals(data);
               setLoading(false);
               setError('');
            }
         } catch (error) {
            setLoading(false);
            setError(error.response.data.message);
         }
      };

      fetchMeals();
   }, [category]);

   return {
      meals,
      loading,
      error,
   };
};

export default useMeals;
