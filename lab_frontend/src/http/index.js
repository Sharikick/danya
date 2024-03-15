import axios from 'axios'

export const API_URL = 'http://localhost:5050/api'

const $api = axios.create({
	baseURL: API_URL,
	withCredentials: true,
})

$api.interceptors.request.use(config => {
	if (localStorage.getItem('token')) {
		config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
	}
	return config
})

$api.interceptors.response.use(
	config => {
		return config
	},
	async error => {
		const originRequest = error.config
		if (
			error.response.status === 401 &&
			error.config &&
			!error.config._isRetry
		) {
			originRequest._isRetry = true
			try {
				const response = await axios.get(`${API_URL}/auth/refresh`, {
					withCredentials: true,
				})
				localStorage.setItem('token', response.data.token)
				return $api.request(originRequest)
			} catch (error) {
				console.log('Пользователь не авторизован')
			}
		}

		throw error
	}
)

export default $api
