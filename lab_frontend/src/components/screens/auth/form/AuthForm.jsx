import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchLoginUser } from '../../../../store/authSlice'
import AuthButton from '../../../ui/button/auth_button/AuthButton'
import AuthInput from '../../../ui/input/auth_input/AuthInput'
import styles from '../Auth.module.css'

const AuthForm = () => {
	const [data, setData] = useState({
		username: '',
		password: '',
	})
	const [type, setType] = useState('login')
	const isAuthType = type === 'login'

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const changeType = e => {
		e.preventDefault()
		setType(isAuthType ? 'register' : 'login')
	}

	const fetchAuthUser = e => {
		e.preventDefault()
		if (isAuthType) {
			dispatch(
				fetchLoginUser({ username: data.username, password: data.password })
			)
			navigate('/')
		} else {
			alert('register')
		}
	}

	return (
		<form className={styles.form}>
			<h1>{isAuthType ? 'Login' : 'Register'}</h1>

			<label className={styles.field} htmlFor='username'>
				<span>Username</span>
				<AuthInput
					id='username'
					value={data.username}
					onChange={e => setData({ ...data, username: e.target.value })}
					type='text'
				/>
			</label>

			<label className={styles.field} htmlFor='password'>
				<span>Password</span>
				<AuthInput
					id='password'
					value={data.password}
					onChange={e => setData({ ...data, password: e.target.value })}
					type='password'
				/>
			</label>
			<div className={styles.btns}>
				<button className={styles.link} onClick={changeType}>
					I want {isAuthType ? 'register' : 'login'}
				</button>
				<AuthButton onClick={fetchAuthUser}>
					{isAuthType ? 'Login' : 'Register'}
				</AuthButton>
			</div>
		</form>
	)
}

export default AuthForm
