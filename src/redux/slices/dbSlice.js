import { createSlice } from "@reduxjs/toolkit"

export const dbSlice = createSlice({
  name: 'db',
  initialState: {
    data: null,
    userBag: {
    },
    userInventory: {}
  },
  reducers: {
    stash: (state, action) => {
      state.data = action.payload
    },
    grab: (state, action) => {
      state.userBag = { ...state.userBag, [action.payload.name]: action.payload }
    },
    giveBack: (state, action) => {
      state.userBag = { ...state.userBag, [action.payload]: null }
    },
    buy: (state, action) => {
      state.userInventory = { ...state.userInventory, inventory: action.payload }
    }
  }
})

export const { stash, grab, buy, giveBack } = dbSlice.actions
export default dbSlice.reducer
