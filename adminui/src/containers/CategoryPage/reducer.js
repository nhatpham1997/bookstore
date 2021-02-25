import constants from "./constants";
import produce from "immer";

const initialState = {
    initLoading: true,
    dataLoading: false,
    saveLoading: false,
    destroyLoading: false,
    error: null,
    categories: [],
    category: null,
    isModalShow: null,
    id: null,
};

const categoryReducer = (state = initialState, { type, payload }) =>
    produce(state, (draft) => {
        switch (type) {
            case constants.CATEGORY_CREATE_START:
                draft.saveLoading = true;
                draft.error = null;
                break;
            case constants.CATEGORY_CREATE_SUCCESS:
                draft.saveLoading = false;
                draft.categories.unshift(payload);
                draft.category = null;
                draft.isModalShow = false;
                draft.error = null;
                break;
            case constants.CATEGORY_CREATE_ERROR:
                draft.saveLoading = false;
                draft.error = payload;
                break;
            case constants.CATEGORY_GET_START:
                draft.dataLoading = true;
                draft.error = null;
                break;
            case constants.CATEGORY_GET_SUCCESS:
                draft.dataLoading = false;
                draft.categories = payload;
                draft.error = null;
                break;
            case constants.CATEGORY_GET_ERROR:
                draft.dataLoading = false;
                draft.error = payload;
                break;
            case constants.CATEGORY_UPDATE_START:
                draft.saveLoading = true;

                draft.error = null;
                break;
            case constants.CATEGORY_UPDATE_SUCCESS:
                draft.saveLoading = false;
                draft.error = null;
                state.categories.forEach((item, index) => {
                    if (item._id === payload._id) {
                        draft.categories[index] = payload;
                    }
                });
                draft.isModalShow = false;
                break;
            case constants.CATEGORY_UPDATE_ERROR:
                draft.saveLoading = false;
                draft.error = payload;
                break;
            case constants.CATEGORY_DESTROY_START:
                draft.destroyLoading = true;
                draft.error = null;
                break;
            case constants.CATEGORY_DESTROY_SUCCESS:
                draft.destroyLoading = false;
                console.log(payload);
                draft.categories = state.categories.filter(
                    (item) => item._id !== payload._id
                );
                draft.error = null;
                break;
            case constants.CATEGORY_DESTROY_ERROR:
                draft.destroyLoading = false;
                draft.error = payload;
                break;
            case constants.TOGGLE_MODAL:
                if (state.isModalShow) {
                    draft.id = null;
                }
                draft.isModalShow = !state.isModalShow;
                break;
            case constants.CATEGORY_FORM_VALUE_CHANGE:
                draft.category = payload;
                break;
            case constants.CATEGORY_CLEAR_CATEGORY:
                draft.category = null;
                break;
            default:
                break;
        }
    });

export default categoryReducer;
