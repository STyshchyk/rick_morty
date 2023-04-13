import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface iPage {
    value: number;
}

const initialState: iPage = {
    value: 1,
}
export const pageSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        }
    }
})
export const {setPage} = pageSlice.actions
export default pageSlice.reducer