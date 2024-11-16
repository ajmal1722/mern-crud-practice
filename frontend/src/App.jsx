import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import HomePage from './components/pages/homePage/HomePage';
import AdminPage from './components/pages/adminPage/AdminPage';
import AdminNavbar from './components/pages/adminPage/AdminNavbar';
import LoginPage from './components/pages/authentication/LoginPage';
import SignUpPage from './components/pages/authentication/SignupPage';

function App() {
  // Define routes
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <HomePage />
        </>
      ),
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
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;