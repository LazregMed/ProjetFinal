import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import  axios from 'axios'


//Add new Product
export const Register = createAsyncThunk('product/Register',async(newProduct,{rejectWithValue,dispatch})=>{
    try {
        const {data} = await axios.post('/api/products/register',newProduct)
        dispatch(getAllProduct())
        return data
        
    } catch (error) {
          return rejectWithValue(error.response.data.message ?
          error.response.data.message :  error.response.data.errors)
         }
})

//Gat All Product
export const getAllProduct=createAsyncThunk('product/getAllProduct',async(_,{rejectWithValue})=>{
    try {
        const {data}=await axios.get('/api/products/')
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

//Delete Data Product
export const DeletedProduct=createAsyncThunk('product/DeletedProduct',async(id,{rejectWithValue,dispatch})=>{
    try {
        const {data}=await axios.delete(`/api/products/${id}`)
       dispatch(getAllProduct())
        return data
        
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
    
})


//Update Data Product
export const UpdateProduct=createAsyncThunk('product/UpdateProduct', async({id,UpdateSave},{rejectWithValue,dispatch})=>{
    try {
        const {data}= await axios.put(`/api/products/${id}`,UpdateSave) 
        dispatch(getAllProduct())
        return data
       
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

    const ProductSlice = createSlice({
        name:'product',
        initialState:{

            
            isLoading:false,
            msg:null,
            Errors:null,
            RegisterProduct:[]
            
        },
        reducers:{
            ClearErrors :(state)=>{
                state.Errors = null
                
        },
        
           
        },

        extraReducers:{
            [Register.pending]:(state)=>{
                state.isLoading = true},

            [Register.fulfilled]:(state,{type,payload})=>{
                state.isLoading = false
                state.msg = payload.msg},

            [Register.rejected]:(state,{type,payload})=>{
                state.Errors = payload},





            [getAllProduct.pending]:(state)=>{
                state.isLoading = true},

            [getAllProduct.fulfilled]:(state,{type,payload})=>{
                state.isLoading = false
                state.RegisterProduct = payload},

            [getAllProduct.rejected]:(state,{type,payload})=>{
                state.Errors = payload},



            [DeletedProduct.pending]:(state)=>{
                state.isLoading = true},

            [DeletedProduct.fulfilled]:(state,{type,payload})=>{
                state.isLoading = false
                state.msg = payload.msg
            },
            [DeletedProduct.rejected]:(state,{type,payload})=>{
                state.Errors = payload
            },




            [UpdateProduct.pending]:(state,payload)=>{
                state.isLoading = true;
               
            },

            [UpdateProduct.fulfilled]:(state,{type,payload})=>{
                state.isLoading = false
                state.msg = payload.msg
                //state.product=payload
                
           // state.products = state.products.map(product=>(product._id === payload._id)? {...product,...payload}: product )
           
        },

            [UpdateProduct.rejected]:(state,{type,payload})=>{
                state.Errors = payload
            },
            
            

                      
        }
    })
    export default ProductSlice.reducer
    export const {ClearErrors}= ProductSlice.actions
