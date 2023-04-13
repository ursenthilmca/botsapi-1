import {
    SHOW_MENU,
    HIDE_MENU
} from "./menu-constants";

const defaultState = {
    show: false
}

const MenuReducer = (prevState = defaultState, action) => {
    switch (action.type) {
        case SHOW_MENU:
            return {
                ...prevState,
                show: true
            };
        case HIDE_MENU:
            return {
                ...prevState,
                show: false
            };
        default:
            return {
                ...prevState,
            };
    }
}

export default MenuReducer;