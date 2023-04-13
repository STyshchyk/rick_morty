import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit'

export interface IUser {
    email: string,
    token: string,
    id: string,
    error: string
}

const initialState: IUser = {
    email: "",
    token: "",
    id: "",
    error: ""
}
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUser>) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.email = "";
            state.token = "";
            state.id = "";
        }
    }
})
export const {setUser, removeUser} = userSlice.actions
export default userSlice.reducer