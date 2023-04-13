// import {
//     SHOW_MENU,
//     HIDE_MENU
// } from "./menu-constants";

// export function menuDisplay() {
//     return {
//         type: SHOW_MENU,
//     }
// }
// export function menuHide() {
//     return {
//         type: HIDE_MENU,

//     }
// }

import { createSlice } from "@reduxjs/toolkit";
const initialState = { menuVisible: false };

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        showMenu(state) {
            state.menuVisible = true;
        },
        hideMenu(state) {
            state.menuVisible = false;
        }
    }
});

export const MenuActions = menuSlice.actions;

export default menuSlice.reducer;