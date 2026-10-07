import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { App } from 'src/App'
import { adminRoutes, Dashboard } from 'src/apps/admin'
import { authRoutes } from 'src/apps/auth'
import { boardsRoutes } from 'src/apps/boards'
import { publicRoutes } from 'src/apps/public'
import { Home } from './apps/public/pages/Home'
import { AuthGuard } from './components/AuthGuard'
const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'public',
        children: publicRoutes,
      },
      {
        path: 'auth',
        children: authRoutes,
      },
      {
        path: 'dashboard',
        element: (
          <AuthGuard>
            <Dashboard />
          </AuthGuard>
        ),
        children: adminRoutes,
      },
      {
        path: 'boards',
        element: (
          <AuthGuard>
            <Outlet />
          </AuthGuard>
        ),
        children: boardsRoutes,
      },
    ],
  },
])

export const Router = () => {
  return <RouterProvider router={routes} />
}
