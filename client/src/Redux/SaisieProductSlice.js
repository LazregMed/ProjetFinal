import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import  axios from 'axios'


//Add new Product
export const AddSaisie = createAsyncThunk('Saisie/AddSaisie',async(newProduct,{rejectWithValue,dispatch})=>{
    try {
        const {data} = await axios.post('/api/saisieproducts/Saisie',newProduct)
        dispatch(getTempsReels())
        return data
        
    } catch (error) {
       return rejectWithValue(error.response.data.message ?
          error.response.data.message :  error.response.data.errors)
    }
})

//Get All Product
export const getTempsReels =createAsyncThunk('Saisie/getTempsReels',async(_,{rejectWithValue})=>{
    try {
        const {data}=await axios.get('/api/saisieproducts')
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

//Delete Data Product
export const DeletedSaisie=createAsyncThunk('Saisie/DeletedSaisie',async(id,{rejectWithValue,dispatch})=>{
    try {
        const {data}=await axios.delete(`/api/saisieproducts/${id}`)
        dispatch(getTempsReels())
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})


//Update Data Product
export const UpdateSaisie=createAsyncThunk('Saisie/UpdateSaisie',async(id,{rejectWithValue,dispatch})=>{
    try {
        const {data}=await axios.put(`/api/saisieproducts/${id}`)
        dispatch(getTempsReels())
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

    const SaisieSlice = createSlice({
        name:'Saisie',
        initialState:{

            
            isLoading:false,
            msg:null,
            Errors:null,
            RegisterSaisie:[]
            
        },
        reducers:{
            ClearErrors :(state)=>{
                state.Errors = null
                
        },
        
           
        },

        extraReducers:{
            [AddSaisie.pending]:(state)=>{
                state.isLoading = true},

            [AddSaisie.fulfilled]:(state,{type,payload})=>{
                state.isLoading = false
                state.msg = payload.msg},

            [AddSaisie.rejected]:(state,{type,payload})=>{
                state.Errors = payload},





            [getTempsReels.pending]:(state)=>{
                state.isLoading = true},

            [getTempsReels.fulfilled]:(state,{type,payload})=>{
                state.isLoading = false
                state.RegisterSaisie = payload},

            [getTempsReels.rejected]:(state,{type,payload})=>{
                state.Errors = payload},



            [DeletedSaisie.pending]:(state)=>{
                state.isLoading = true},

            [DeletedSaisie.fulfilled]:(state,{type,payload})=>{
                state.isLoading = false
                state.msg = payload.msg
            },
            [DeletedSaisie.rejected]:(state,{type,payload})=>{
                state.Errors = payload
            },




            [UpdateSaisie.pending]:(state)=>{
                state.isLoading = true},

            [UpdateSaisie.fulfilled]:(state,{type,payload})=>{
                state.isLoading = false
                state.msg = payload.msg
                //state.RegisterSaisie = state.RegisterSaisie.map(product=>(product._id === payload._id)? {...product,...payload}: product )
                
            },
            [UpdateSaisie.rejected]:(state,{type,payload})=>{
                state.Errors = payload
            },
            
            

                      
        }
    })
    export default SaisieSlice.reducer
    export const {ClearErrors}= SaisieSlice.actions
