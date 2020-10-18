import constants from "./constants";
import produce from "immer";

const initialState = {
    menuVisible: true,
    loading: false,
};

const layoutReducer = (state = initialState, { type, payload }) =>
    produce(state, (draft) => {
        switch (type) {
            case constants.MENU_TOGGLE:
                draft.menuVisible = !state.menuVisible;
                break;
            case constants.MENU_SHOW:
                draft.menuVisible = true;
                break;
            case constants.MENU_HIDE:
                draft.menuVisible = false;
                break;
            default:
                break;
        }
    });

export default layoutReducer;
