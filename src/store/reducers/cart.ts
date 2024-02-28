import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Menu } from '../../types/api'

type CartState = {
  items: Menu[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Menu>) => {
      state.items.push(action.payload)
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer
