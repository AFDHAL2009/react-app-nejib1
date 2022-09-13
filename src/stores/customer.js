import { createSlice } from "@reduxjs/toolkit"

// Slice

const slice = createSlice({
  name: "customers",
  initialState: {
    customers: false,
  },
  reducers: {
    customersSuccess: (state, action) => {
      state.customers = action.payload
      state.isLoading = false
    },
  },
})

export const { customersSuccess } = slice.actions
export default slice.reducer
