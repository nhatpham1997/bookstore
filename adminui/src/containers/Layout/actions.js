import constants from "./constants";
import { getHistory } from "../configureStore";

const actions = {
    doToggleMenu: () => {
        return {
            type: constants.MENU_TOGGLE,
        };
    },

    doShowMenu: () => {
        return {
            type: constants.MENU_SHOW,
        };
    },

    doHideMenu: () => {
        return {
            type: constants.MENU_HIDE,
        };
    },

    doSignout: () => {
        window.localStorage.removeItem("auth");
        getHistory().push("/signin");
    },
};

export default actions;
