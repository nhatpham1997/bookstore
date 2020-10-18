import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import signin from "./SigninPage/reducer";

export default (history) =>
    combineReducers({
        router: connectRouter(history),
        signin
    });
