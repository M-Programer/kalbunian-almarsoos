import { configureStore } from '@reduxjs/toolkit'

import cartActions, { cartSlice } from './cart'

export default store = configureStore({
	reducer: {
		cart: cartSlice.reducer
	}
})

export {
	cartActions,
}