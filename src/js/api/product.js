import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const fetchProduct = createAsyncThunk('product/productStore', async (id) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    return response.data
})

export default fetchProduct
