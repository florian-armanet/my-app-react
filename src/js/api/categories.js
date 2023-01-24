import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const fetchCategories = createAsyncThunk('categories/categoriesStore', async () => {
    const response = await axios.get('https://fakestoreapi.com/products/categories')
    return response.data
})

export default fetchCategories
