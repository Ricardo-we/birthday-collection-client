import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { User } from 'lucide-svelte';

const initialState: { user: User | null } = { user: null } 

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUser(state, action){
      state.user = action.payload;
    }
  }
})


export const { changeUser } = userSlice.actions

export default userSlice.reducer;

