
import { IUser } from "@/models/user.model";
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE: IUser = {
    id: '',
    user: ""
}

export const UserSlice = createSlice({
    name: "user",
    initialState: INITIAL_STATE,
    reducers: {
        saveSessionUser: (state, action)=>{
            state.id = action.payload.id
            state.id = action.payload.user
            
            sessionStorage.setItem("id", action.payload.id);
            sessionStorage.setItem("user", action.payload.user);
        },
        logout: (state)=>{
            state.id = INITIAL_STATE.id;
            state.user = INITIAL_STATE.user;

            sessionStorage.clear()
        }
        
    }
})


export const{ saveSessionUser, logout } = UserSlice.actions;
export default UserSlice.reducer;