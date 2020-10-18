import constants from "./constants";
import { getHistory } from "../configureStore";
import { fetchSignin } from "./service";
import Errors from "../shared/error";

const actions = {
    doClearErrorMessage: () => {
        return { type: constants.ERROR_MESSAGE_CLEAR };
    },

    doSignin: values => async dispatch => {
        try {
            dispatch({ type: constants.SIGNIN_START });

            // call api: signin
            let response = await fetchSignin(values);

            window.localStorage.setItem(
                "auth",
                JSON.stringify(response.data)
            );
            dispatch({ type: constants.SIGNIN_SUCCESS, payload: response.data });
            getHistory().push("/");
        } catch (error) {
            Errors.handle(error);
            dispatch({
                type: constants.SIGNIN_ERROR
            });
        }
    }
};
export default actions;
