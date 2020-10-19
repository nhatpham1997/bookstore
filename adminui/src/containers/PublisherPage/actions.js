import constants from "./constants";
import { getHistory } from "../configureStore";
import { services } from "./service";
import Error from "../shared/error";

const actions = {
    doCreate: (data) => async (dispatch) => {
        try {
            dispatch({
                type: constants.PUBLISHER_CREATE_START,
            });

            await services.createFn(data);

            dispatch({ 
                type: constants.PUBLISHER_CREATE_SUCCESS 
            });
        } catch (error) {
            Error.handle(error);

            dispatch({
                type: constants.PUBLISHER_CREATE_ERROR
            });
        }
    },
};

export default actions;