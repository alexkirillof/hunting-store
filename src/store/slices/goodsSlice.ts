import { createSlice } from '@reduxjs/toolkit'
import { getGoods } from '../actions/getGoods.ts'
import { RootState } from '..'

export interface IProduct {
  name: string
  picture: string
  price: number
  quantity: number
}

 export interface IGoods {
  cart: IProduct[]
  favorites: IProduct[]
  goods: IProduct[]
  loading: boolean
  error: string
}

const initialState: IGoods = {
  cart: [],
  favorites: [],
  goods: [],
  loading: true,
  error: ''
}

export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    addItemToCart: (state, { payload }) => {
      let newCart = [...state.cart]
      const found = state.cart.find(({ name }) => name === payload.name)

      if (found) {
        newCart = newCart.map((item) => {
          return item
        })
      } else newCart.push({ ...payload })

      state.cart = newCart
    },
    addItemToFav: (state, { payload }) => {
      let newFav = [...state.favorites]
      const found = state.favorites.find(({ name }) => name === payload.name)

      if (found) {
        newFav = newFav.map((item) => {
          return item
        })
      } else newFav.push({ ...payload })

      state.favorites = newFav
    },
    removeItemFromCart: (state, { payload }) => {
      state.cart = state.cart.filter(({ name }) => name !== payload.name)
    },
    removeItemFromFav: (state, { payload }) => {
      state.favorites = state.favorites.filter(
        ({ name }) => name !== payload.name
      )
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGoods.pending, (state) => {
      state.loading = true
      state.error = ''
    })
    builder.addCase(getGoods.fulfilled, (state, action) => {
      state.goods = action.payload
      state.loading = false
    })
    builder.addCase(getGoods.rejected, (state) => {
      state.loading = false
    })
  }
})
export const {
  addItemToCart,
  addItemToFav,
  removeItemFromCart,
  removeItemFromFav,
} = goodsSlice.actions
export const goods = (state: RootState) => state.goods

export default goodsSlice.reducer
