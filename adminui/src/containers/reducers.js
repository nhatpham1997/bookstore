import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import signin from "./SigninPage/reducer";
import publisher from "./PublisherPage/reducer";
import category from "./CategoryPage/reducer";
import author from "./AuthorPage/reducer";

export default (history) =>
    combineReducers({
        router: connectRouter(history),
        signin,
        publisher,
        category,
        author
    });
