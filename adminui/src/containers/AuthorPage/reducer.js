import constants from "./constants";
import produce from "immer";

const initialState = {
    initLoading: true,
    dataLoading: false,
    saveLoading: false,
    destroyLoading: false,
    error: null,
    authors: [],
    author: null,
    isModalShow: null,
    id: null,
};

const authorReducer = (state = initialState, { type, payload }) =>
    produce(state, (draft) => {
        switch (type) {
            case constants.AUTHOR_CREATE_START:
                draft.saveLoading = true;
                draft.error = null;
                break;
            case constants.AUTHOR_CREATE_SUCCESS:
                draft.saveLoading = false;
                draft.authors.unshift(payload);
                draft.author = null;
                draft.isModalShow = false;
                draft.error = null;
                break;
            case constants.AUTHOR_CREATE_ERROR:
                draft.saveLoading = false;
                draft.error = payload;
                break;
            case constants.AUTHOR_GET_START:
                draft.dataLoading = true;
                draft.error = null;
                break;
            case constants.AUTHOR_GET_SUCCESS:
                draft.dataLoading = false;
                draft.authors = payload;
                draft.error = null;
                break;
            case constants.AUTHOR_GET_ERROR:
                draft.dataLoading = false;
                draft.error = payload;
                break;
            case constants.AUTHOR_UPDATE_START:
                draft.saveLoading = true;

                draft.error = null;
                break;
            case constants.AUTHOR_UPDATE_SUCCESS:
                draft.saveLoading = false;
                draft.error = null;
                state.authors.forEach((item, index) => {
                    if (item._id === payload._id) {
                        draft.authors[index] = payload;
                    }
                });
                draft.author = null;
                draft.isModalShow = false;
                break;
            case constants.AUTHOR_UPDATE_ERROR:
                draft.saveLoading = false;
                draft.error = payload;
                break;
            case constants.AUTHOR_DESTROY_START:
                draft.destroyLoading = true;
                draft.error = null;
                break;
            case constants.AUTHOR_DESTROY_SUCCESS:
                draft.destroyLoading = false;
                console.log(payload);
                draft.authors = state.authors.filter(
                    (item) => item._id !== payload._id
                );
                draft.error = null;
                break;
            case constants.AUTHOR_DESTROY_ERROR:
                draft.destroyLoading = false;
                draft.error = payload;
                break;
            case constants.TOGGLE_MODAL:
                if (state.isModalShow) {
                    draft.id = null;
                }
                draft.isModalShow = !state.isModalShow;
                break;
            case constants.AUTHOR_FORM_VALUE_CHANGE:
                draft.author = payload;
                break;
            case constants.AUTHOR_CLEAR_AUTHOR:
                draft.author = null;
                break;
            default:
                break;
        }
    });

export default authorReducer;
