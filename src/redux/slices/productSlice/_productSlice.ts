import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { IProductState } from "./_productTypes";

const initialStateProduct: IProductState[] = []

const productSlice = createSlice({
    name: "product",
    initialState: initialStateProduct,
    reducers: {
      addProduct: (state: IProductState[], action: PayloadAction<IProductState>) => {
        state.push(action.payload)
      }
    }
})

export const addProduct = productSlice.actions.addProduct

export default productSlice.reducer