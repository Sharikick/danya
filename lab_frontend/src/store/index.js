import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice.js'
import filmReducer from './filmSlice'

export default configureStore({
	reducer: {
		auth: authReducer,
		film: filmReducer,
	},
})
