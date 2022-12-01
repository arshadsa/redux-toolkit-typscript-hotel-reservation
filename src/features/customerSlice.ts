import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface CustomerState{
  value: Customer[];
}

interface Customer {
  id: string;
  name: string;
  food: string[];
}

interface AddFoodtoCustomerPayload {
  food: string;
  id: string
}

const initialState: CustomerState = {
  value: []
}



export const customerSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>)=>{
      state.value.push(action.payload);
    },
    addFoodtoCutomer: (state, action: PayloadAction<AddFoodtoCustomerPayload>) => {
      state.value.forEach((customer => {
        if(customer.id === action.payload.id){
          customer.food.push(action.payload.food)
        }
      }))
    }
  }
})

export const { addCustomer, addFoodtoCutomer } = customerSlice.actions

export default customerSlice.reducer