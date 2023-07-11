import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    users : []
}


const userSlice = createSlice({
    name : 'users',
    initialState,
    reducers: {
         getUsers : (state,action)=>{
            state.users = action.payload.map((user)=>{
               return {
                  _id : user._id,
                  name : user.name,
                  email : user.email,
                  phone : user.phone,
               }
            })
         },
         addUser : (state,action)=>{
            state.users.push(action.payload)
         },
         editUser : (state,action)=>{
           
            const index = state.users.findIndex((item)=> item.id === action.payload.id)
            state.users[index] = {
               id:action.payload.id,
               name:action.payload.name,
               email:action.payload.email,
               phone:action.payload.phone
            }
         },
         deleteUser : (state,action)=>{
            const id = action.payload.id
            state.users = state.users.filter((item)=> item.id !== id)
            
         }
    }
})

export const {getUsers,getSingleUser,addUser,editUser,deleteUser} = userSlice.actions
export default userSlice.reducer