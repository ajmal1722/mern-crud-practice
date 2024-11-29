import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserAuth from './utils/auth/UserAuth';
import ManiLayout from './layout/ManiLayout';

const HomePage = lazy(() => import('./components/pages/homePage/HomePage'));
const CartPage = lazy(() => import('./components/pages/homePage/CartPage'));
const LoginPage = lazy(() => import('./components/pages/authentication/LoginPage'));
const SignUpPage = lazy(() => import('./components/pages/authentication/SignupPage'));
const AdminPage = lazy(() => import('./components/pages/adminPage/AdminPage'));
const AdminLogin = lazy(() => import('./components/pages/adminPage/AdminLogin'));
const PracticePage = lazy(() => import('./components/pages/practice/PracticePage'));
const AdminProductPage = lazy(() => import('./components/pages/adminPage/AdminProductPage'));

function App() {
  // Loader Component
  const Loader = () => (
    <div className="w-full h-screen flex justify-center items-center">
      Loading...
    </div>
  );

  // Define routes
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Suspense fallback={<Loader />}>
          <ManiLayout />
        </Suspense>
      ),
      children: [
        {
          path: '/',
          element: (
            <Suspense fallback={<Loader />}>
              <HomePage />
            </Suspense>
          ),
          index: true,
        },
        {
          element: (
            <Suspense fallback={<Loader />}>
              <UserAuth />
            </Suspense>
          ),
          children: [
            {
              path: '/cart',
              element: (
                <Suspense fallback={<Loader />}>
                  <CartPage />
                </Suspense>
              ),
            },
          ],
        },
      ],
    },
    {
      path: '/login',
      element: (
        <Suspense fallback={<Loader />}>
          <LoginPage />
        </Suspense>
      ),
    },
    {
      path: '/signup',
      element: (
        <Suspense fallback={<Loader />}>
          <SignUpPage />
        </Suspense>
      ),
    },
    {
      path: '/admin',
      element: (
        <Suspense fallback={<Loader />}>
          <>
            <AdminPage />
          </>
        </Suspense>
      ),
      children: [
        {
          path: 'products',
          element: (
            <Suspense fallback={<Loader />}>
              <AdminProductPage />
            </Suspense>
          )
        }
      ]
    },
    {
      path: '/admin/login',
      element: (
        <Suspense fallback={<Loader />}>
          <AdminLogin />
        </Suspense>
      ),
    },
    {
      path: '/practice',
      element: (
        <Suspense fallback={<Loader />}>
          <PracticePage />
        </Suspense>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;