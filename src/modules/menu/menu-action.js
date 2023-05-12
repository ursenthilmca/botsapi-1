import { createSlice } from "@reduxjs/toolkit";
const initialState = { menuVisible: true };

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        showMenu(state) {
            state.menuVisible = !state.menuVisible;
        },
        hideMenu(state) {
            state.menuVisible = false;
        }
    }
});

export const MenuActions = menuSlice.actions;

export default menuSlice.reducer;