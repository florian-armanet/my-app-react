import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const fetchProducts = createAsyncThunk('products/productsStore', async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data
})

export default fetchProducts
