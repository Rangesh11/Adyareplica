// src/redux/formSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  fullName: string;
  email: string;
  mobile: string;
  company: string;
  revenue: string;
}

const initialState: FormState = {
  fullName: '',
  email: '',
  mobile: '',
  company: '',
  revenue: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData(state, action: PayloadAction<FormState>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setFormData } = formSlice.actions;
export default formSlice.reducer;
