import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCheckUser } from '../../../store/authSlice'
import styles from './Profile.module.css'

const Profile = () => {
	const dispatch = useDispatch()
	const user = useSelector(state => state.auth.user)

	useEffect(() => {
		if (localStorage.getItem('token')) {
			dispatch(fetchCheckUser())
		}
	}, [dispatch])
	return (
		<div className={styles.profile}>
			<h1>Username: {user?.username}</h1>
			<h1>Роли: </h1>
			{user?.roles.map(element => (
				<p key={element}>{element}</p>
			))}
		</div>
	)
}

export default Profile
