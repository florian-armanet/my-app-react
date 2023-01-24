import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const fetchProductsOfCategory = createAsyncThunk('productsOfCategory', async (categoryLabelOrigin) => {
    const response = await axios.get(`https://fakestoreapi.com/products/category/${ categoryLabelOrigin }`)
    return response.data
})

export default fetchProductsOfCategory
