import constants from "./constants";
import produce from "immer";

const initialState = {
    initLoading: true,
    loading: false,
    error: null,
};

const signinReducer = (state = initialState, { type, payload }) =>
    produce(state, (draft) => {
        switch (type) {
            case constants.ERROR_MESSAGE_CLEAR:
                draft.error = null;
                break;
            case constants.SIGNIN_START:
                draft.loading = true;
                draft.error = null;
                break;
            case constants.SIGNIN_SUCCESS:
                draft.loading = false;
                draft.error = false;
                break;
            case constants.SIGNIN_ERROR:
                draft.loading = false;
                // draft.error = payload.error || null;
                break;
            default:
                break;
        }
    });

export default signinReducer;
