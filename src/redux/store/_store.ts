import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/counterSlice/_counterSlice'
import productReducer from '../slices/productSlice/_productSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch