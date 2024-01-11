import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const getGoods = createAsyncThunk(
  'goods/get',
  async () => {
    try {
      const res = await axios('/api')
      return res.data.items
    } catch (err) {
      console.log(err)

    }
  }
)
