import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserAuth from './utils/auth/UserAuth';
import Navbar from './components/common/Navbar';
import HomePage from './components/pages/homePage/HomePage';
import AdminPage from './components/pages/adminPage/AdminPage';
import AdminNavbar from './components/pages/adminPage/AdminNavbar';
import LoginPage from './components/pages/authentication/LoginPage';
import SignUpPage from './components/pages/authentication/SignupPage';
import ManiLayout from './layout/ManiLayout';
import CartPage from './components/pages/homePage/CartPage';
import AdminLogin from './components/pages/adminPage/AdminLogin';

function App() {
  // Define routes
  const router = createBrowserRouter([
    {
      path: '/',
      element: <ManiLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
          index: true
        }, 
        {
          element: <UserAuth />,
          children: [
            {
              path: '/cart',
              element: <CartPage />
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      element: (
        <>
          <LoginPage />
        </>
      ),
    },
    {
      path: '/signup',
      element: (
        <>
          <SignUpPage />
        </>
      ),
    },
    {
      path: '/admin',
      element: (
        <>
          <AdminNavbar />
          <AdminPage />
        </>
      ),
    },
    {
      path: '/admin/login',
      element: <AdminLogin />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;