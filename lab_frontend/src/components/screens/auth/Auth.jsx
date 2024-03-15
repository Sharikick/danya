import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Auth.module.css'
import AuthForm from './form/AuthForm'

const Auth = () => {
	return (
		<div className={styles.auth}>
			<Link className={styles.back} to={'/'}>
				Back
			</Link>
			<AuthForm />
		</div>
	)
}

export default Auth
