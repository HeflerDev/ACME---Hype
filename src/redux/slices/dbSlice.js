import { createSlice } from "@reduxjs/toolkit"

export const dbSlice = createSlice({
  name: 'db',
  initialState: {
    data: null,
    userBag: [],
    userBought: []
  },
  reducers: {
    stash: (state, action) => {
      state.data = action.payload
    },
    grab: (state, action) => {
      state.userBag.push(action.payload)
    },
    buy: (state, action) => {
      state.userBought.push(action.payload)
    }
  }
})

export const { stash, grab, buy } = dbSlice.actions
export default dbSlice.reducer
