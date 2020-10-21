import React from "react";
import { Redirect, Route } from "react-router-dom";
import getToken from "../../../untils/getToken";
const isLogin = () => {
    return !!getToken();
};
const AuthRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            !!isLogin() ? (
                <Redirect
                    to={{
                        pathname: "/",
                        state: { from: props.location }
                    }}
                />
            ) : (
                <Component {...props} />
            )
        }
    />
);

export default AuthRoute;
