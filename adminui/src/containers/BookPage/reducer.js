import constants from "./constants";
import produce from "immer";

const initialState = {
    initLoading: true,
    dataLoading: false,
    saveLoading: false,
    destroyLoading: false,
    error: null,
    books: [],
    book: null,
    isModalShow: null,
    id: null,
};

const bookReducer = (state = initialState, { type, payload }) =>
    produce(state, (draft) => {
        switch (type) {
            case constants.BOOK_CREATE_START:
                draft.saveLoading = true;
                draft.error = null;
                break;
            case constants.BOOK_CREATE_SUCCESS:
                draft.saveLoading = false;
                draft.books.unshift(payload);
                draft.book = null;
                draft.isModalShow = false;
                draft.error = null;
                break;
            case constants.BOOK_CREATE_ERROR:
                draft.saveLoading = false;
                draft.error = payload;
                break;
            case constants.BOOK_GET_START:
                draft.dataLoading = true;
                draft.error = null;
                break;
            case constants.BOOK_GET_SUCCESS:
                draft.dataLoading = false;
                draft.books = payload;
                draft.error = null;
                break;
            case constants.BOOK_GET_ERROR:
                draft.dataLoading = false;
                draft.error = payload;
                break;
            case constants.BOOK_UPDATE_START:
                draft.saveLoading = true;
                draft.error = null;
                break;
            case constants.BOOK_UPDATE_SUCCESS:
                draft.saveLoading = false;
                draft.error = null;
                state.books.forEach((item, index) => {
                    if (item._id == payload._id) {
                        draft.books[index] = payload;
                    }
                });
                draft.book = null;
                draft.isModalShow = false;
                break;
            case constants.BOOK_UPDATE_ERROR:
                draft.saveLoading = false;
                draft.error = payload;
                break;
            case constants.BOOK_DESTROY_START:
                draft.destroyLoading = true;
                draft.error = null;
                break;
            case constants.BOOK_DESTROY_SUCCESS:
                draft.destroyLoading = false;
                console.log(payload);
                draft.books = state.books.filter(
                    (item) => item._id != payload._id
                );
                draft.error = null;
                break;
            case constants.BOOK_DESTROY_ERROR:
                draft.destroyLoading = false;
                draft.error = payload;
                break;
            case constants.TOGGLE_MODAL:
                if (state.isModalShow) {
                    draft.id = null;
                }
                draft.isModalShow = !state.isModalShow;
                break;
            case constants.BOOK_FORM_VALUE_CHANGE:
                draft.book = payload;
                break;
            case constants.BOOK_CLEAR_BOOK:
                draft.book = null;
                break;
            default:
                break;
        }
    });

export default bookReducer;
