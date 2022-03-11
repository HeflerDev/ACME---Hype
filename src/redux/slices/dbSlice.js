import { createSlice } from "@reduxjs/toolkit"

export const dbSlice = createSlice({
  name: 'db',
  initialState: {
    data: null
  },
  reducers: {
    stash: (state, action) => {
      state.data = action.payload
    }
  }
})

export const { stash } = dbSlice.actions
export default dbSlice.reducer
