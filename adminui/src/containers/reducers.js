import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import signin from "./SigninPage/reducer";
import publisher from "./PublisherPage/reducer";

export default (history) =>
    combineReducers({
        router: connectRouter(history),
        signin,
        publisher,
    });
