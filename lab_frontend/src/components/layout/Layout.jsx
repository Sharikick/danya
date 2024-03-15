import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Header from './header/Header'

const Layout = () => {
	const isLoading = useSelector(state => state.auth.status)

	return (
		<div>
			{isLoading === 'loading' ? (
				<h1>Loading</h1>
			) : (
				<>
					<Header />
					<Outlet />
				</>
			)}
		</div>
	)
}

export default Layout
