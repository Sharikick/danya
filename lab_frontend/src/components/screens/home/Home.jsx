import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchCheckUser } from '../../../store/authSlice'

const Home = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		if (localStorage.getItem('token')) {
			dispatch(fetchCheckUser())
		}
	}, [dispatch])

	return <div>Home</div>
}

export default Home
