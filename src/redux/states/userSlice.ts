
import { IUser } from "@/models/user.model";
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE: IUser = {
    id: sessionStorage.getItem('id') || '',
    user: sessionStorage.getItem('user') || ''
}

export const UserSlice = createSlice({
    name: "user",
    initialState: INITIAL_STATE,
    reducers: {
        saveSessionUser: (_state, action)=>{            
            sessionStorage.setItem("id", action.payload.id);
            sessionStorage.setItem("user", action.payload.user);
            return action.payload
        },
        logout: (state)=>{
            sessionStorage.clear();

            state.id = '';
            state.user = '';

        }
        
    }
})


export const{ saveSessionUser, logout } = UserSlice.actions;
export default UserSlice.reducer;