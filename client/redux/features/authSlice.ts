import { createSlice } from "@reduxjs/toolkit"

interface AuthState {
	isAuthenticated: boolean;
	isLoading: boolean;
	isSuperUser: boolean;
}

const initialState = {
	isAuthenticated: false,
	isLoading: true,
	isSuperUser: false,
} as AuthState;

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: state => {
			state.isAuthenticated = true;
		},
		setSuperUser: state => {
			state.isSuperUser = true;
		},
		logout: state => {
			state.isAuthenticated = false;
		},
		finishInitialLoad: state => {
			state.isLoading = false;
		},
	},
});

export const { setAuth, logout, finishInitialLoad, setSuperUser } = authSlice.actions;
export default authSlice.reducer;