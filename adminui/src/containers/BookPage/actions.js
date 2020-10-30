import constants from "./constants";
import { getHistory } from "../configureStore";
import { services } from "./service";
import Errors from "../shared/error";
import { message } from "antd";

const actions = {
    doCreate: (data) => async (dispatch) => {
        try {
            dispatch({
                type: constants.BOOK_CREATE_START,
            });

            const res = await services.createFn(data);
            console.log(res);
            dispatch({
                type: constants.BOOK_CREATE_SUCCESS,
                payload: res.data,
            });
            message.success("Thêm mới thành công");
        } catch (error) {
            Errors.handle(error);

            dispatch({
                type: constants.BOOK_CREATE_ERROR,
            });
        }
    },
    list: (filter = {}) => async (dispatch) => {
        try {
            dispatch({ type: constants.BOOK_GET_START });

            let response = await services.listFn(filter);

            dispatch({
                type: constants.BOOK_GET_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            Errors.handle(error);
            dispatch({
                type: constants.BOOK_GET_ERROR,
            });
        }
    },
    doDestroy: (id) => async (dispatch) => {
        try {
            dispatch({ type: constants.BOOK_DESTROY_START });

            let response = await services.destroyFn(id);

            dispatch({
                type: constants.BOOK_DESTROY_SUCCESS,
                payload: response.data,
            });
            message.success("Xóa thành công");

        } catch (error) {
            Errors.handle(error);
            dispatch({
                type: constants.BOOK_DESTROY_ERROR,
            });
        }
    },
    doUpdate: (id, value) => async (dispatch) => {
        try {
            dispatch({ type: constants.BOOK_UPDATE_START });

            let response = await services.updateFn(id, value);

            dispatch({
                type: constants.BOOK_UPDATE_SUCCESS,
                payload: response.data,
            });
            message.success("Câp nhật thành công");
        } catch (error) {
            Errors.handle(error);
            dispatch({
                type: constants.BOOK_UPDATE_ERROR,
            });
        }
    },
};

export default actions;
