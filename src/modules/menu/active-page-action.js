import { createSlice } from "@reduxjs/toolkit";
const initialState = { activePage: 'customer-setup' };

const activePageSlice = createSlice({
    name: 'pageActive',
    initialState,
    reducers: {
        ChangeActivePage(state) {
            console.log(state.activePage)
            state.activePage = state.activePage;
        }
    }
});
export const activePageAction = activePageSlice.actions;

export default activePageSlice.reducer;