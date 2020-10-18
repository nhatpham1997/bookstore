import constants from "./constanst";
import produce from "immer";

const initialState = {
    initLoading: true,
    dataLoading: false,
    saveLoading: false,
    error: null,
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
                break;
            case constants.PUBLISHER_UPDATE_ERROR:
                draft.saveLoading = false;
                draft.error = payload;
                break;
        }
    });

export default publisherReducer;