import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchLogoutUser } from '../../../store/authSlice'
import styles from '../Layout.module.css'

const Header = () => {
	const isAuth = useSelector(state => state.auth.isAuth)
	const dispatch = useDispatch()

	return (
		<div className={styles.header}>
			<ul>
				<li>
					<Link to={'/'}>Главная</Link>
				</li>
				{isAuth ? (
					<>
						<li>
							<Link to={'/films'}>Фильмы</Link>
						</li>
						<li>
							<Link to={'/admin'}>Админ панель</Link>
						</li>
					</>
				) : (
					''
				)}
			</ul>

			<div className={styles.btns}>
				{isAuth ? (
					<>
						<Link
							style={{
								marginRight: '10px',
							}}
							className={styles.btn}
							to={'/profile'}
						>
							Профиль
						</Link>
						<button
							onClick={() => dispatch(fetchLogoutUser())}
							className={styles.btn}
						>
							Выйти
						</button>
					</>
				) : (
					<Link className={styles.btn} to={'/auth'}>
						Войти
					</Link>
				)}
			</div>
		</div>
	)
}

export default Header
