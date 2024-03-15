import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/layout/Layout.jsx'
import Admin from '../components/screens/admin/Admin.jsx'
import Auth from '../components/screens/auth/Auth.jsx'
import Films from '../components/screens/films/Films.jsx'
import Home from '../components/screens/home/Home.jsx'
import Profile from '../components/screens/profile/Profile.jsx'

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/films',
				element: <Films />,
			},
			{
				path: '/admin',
				element: <Admin />,
			},
		],
	},
	{
		path: '/auth',
		element: <Auth />,
	},
	{
		path: '/profile',
		element: <Profile />,
	},
])

export default router
