import './App.css';
import { CssBaseline } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';

const router = createBrowserRouter([
   {
      path: '/',
      element: <Layout />,
      children: [
         {
            path: '/',
            element: <Home />,
         },
      ],
   },
]);

function App() {
   return (
      <ThemeProvider theme={theme}>
         <div className='App'>
            <CssBaseline />
            <RouterProvider router={router} />
         </div>
      </ThemeProvider>
   );
}

export default App;
