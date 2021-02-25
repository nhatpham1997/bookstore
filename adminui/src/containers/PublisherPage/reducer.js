import constants from "./constants";
import produce from "immer";

const initialState = {
    initLoading: true,
    dataLoading: false,
    saveLoading: false,
    destroyLoading: false,
    error: null,
    publishers: [],
    publisher: null,
    isModalShow: null,
    id: null,
};

const publisherReducer = (state = initialState, { type, payload }) =>
    produce(state, (draft) => {
        switch (type) {
            case constants.PUBLISHER_CREATE_START:
                draft.saveLoading = true;
                draft.error = null;
                break;
            case constants.PUBLISHER_CREATE_SUCCESS:
                draft.saveLoading = false;
                draft.publishers.unshift(payload);
                draft.publisher = null;
                draft.isModalShow = false;
                draft.error = null;
                break;
            case constants.PUBLISHER_CREATE_ERROR:
                draft.saveLoading = false;
                draft.error = payload;
                break;
            case constants.PUBLISHER_GET_START:
                draft.dataLoading = true;
                draft.error = null;
                break;
            case constants.PUBLISHER_GET_SUCCESS:
                draft.dataLoading = false;
                draft.publishers = payload;
                draft.error = null;
                break;
            case constants.PUBLISHER_GET_ERROR:
                draft.dataLoading = false;
                draft.error = payload;
                break;
            case constants.PUBLISHER_UPDATE_START:
                draft.saveLoading = true;

                draft.error = null;
                break;
            case constants.PUBLISHER_UPDATE_SUCCESS:
                draft.saveLoading = false;
                draft.error = null;
                state.publishers.forEach((item, index) => {
                    if (item._id === payload._id) {
                        draft.publishers[index] = payload;
                    }
                });
                draft.isModalShow = false;
                break;
            case constants.PUBLISHER_UPDATE_ERROR:
                draft.saveLoading = false;
                draft.error = payload;
                break;
            case constants.PUBLISHER_DESTROY_START:
                draft.destroyLoading = true;
                draft.error = null;
                break;
            case constants.PUBLISHER_DESTROY_SUCCESS:
                draft.destroyLoading = false;
                console.log(payload);
                draft.publishers = state.publishers.filter(
                    (item) => item._id !== payload._id
                );
                draft.error = null;
                break;
            case constants.PUBLISHER_DESTROY_ERROR:
                draft.destroyLoading = false;
                draft.error = payload;
                break;
            case constants.TOGGLE_MODAL:
                if (state.isModalShow) {
                    draft.id = null;
                }
                draft.isModalShow = !state.isModalShow;
                break;
            case constants.PUBLISHER_FORM_VALUE_CHANGE:
                draft.publisher = payload;
                break;
            case constants.PUBLISHER_CLEAR_PUBLISHER:
                draft.publisher = null;
                break;
            default:
                break;
        }
    });

export default publisherReducer;
