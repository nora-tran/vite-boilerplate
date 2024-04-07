import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTE_PATHS } from './constants/routes.constants';
import { HomePage } from './pages/Home/HomePage';
import { LoginPage } from './pages/Login/LoginPage';

const router = createBrowserRouter([
  {
    path: ROUTE_PATHS.HOME,
    element: <HomePage />,
  },
  {
    path: ROUTE_PATHS.LOGIN,
    element: <LoginPage />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
