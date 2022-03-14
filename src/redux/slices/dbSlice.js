import { createSlice } from "@reduxjs/toolkit"

export const dbSlice = createSlice({
  name: 'db',
  initialState: {
    data: null,
    userBag: {},
  },
  reducers: {
    stash: (state, action) => {
      state.data = action.payload
    },
    grab: (state, action) => {
      state.userBag = { ...state.userBag, [action.payload.name]: action.payload }
    },
    giveBack: (state, action) => {
      delete state.userBag[action.payload]
    },
    clear: (state) => {
        state.userBag = {}
    }
  }
})

export const { stash, grab, buy, giveBack, clear } = dbSlice.actions
export default dbSlice.reducer
