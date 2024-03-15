import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import AuthService from '../services/AuthService'

export const fetchLoginUser = createAsyncThunk(
	'auth/fetchLoginUser',
	async function ({ username, password }) {
		return await AuthService.login(username, password)
	}
)

export const fetchCheckUser = createAsyncThunk(
	'auth/fetchCheckUser',
	async function () {
		return await AuthService.check()
	}
)

export const fetchLogoutUser = createAsyncThunk(
	'auth/fetchLogoutUser',
	async function () {
		return await AuthService.logout()
	}
)

const initialState = {
	status: null,
	error: null,
	isAuth: false,
	user: null,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchLoginUser.pending, state => {
				state.status = 'loading'
				state.error = null
			})
			.addCase(fetchLoginUser.fulfilled, (state, action) => {
				state.status = 'resolved'
				state.error = null
				state.isAuth = true
				console.log(action.payload.data)
				state.user = action.payload.data.user
				localStorage.setItem('token', action.payload.data.token)
			})
			.addCase(fetchLoginUser.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.payload?.message
			})
			.addCase(fetchCheckUser.fulfilled, (state, action) => {
				state.status = 'resolved'
				state.error = null
				state.isAuth = true
				state.user = action.payload.data
			})
			.addCase(fetchLogoutUser.fulfilled, state => {
				localStorage.removeItem('token')
				state.isAuth = false
				state.user = null
			})
	},
})

export default authSlice.reducer
