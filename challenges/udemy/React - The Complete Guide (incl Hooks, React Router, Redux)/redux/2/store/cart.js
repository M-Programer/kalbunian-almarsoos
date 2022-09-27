import { createSlice } from '@reduxjs/toolkit'
export const cartSlice = createSlice({
	name: 'cart',
	initialState: {shown: false},
	reducers: {
		toggle: state => state.shown = !state.shown
	},
})

export default cartSlice.actions