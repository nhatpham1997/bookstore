import React from "react";
import { Route, Redirect } from "react-router-dom";
import getToken from "../../../untils/getToken";

const isLogin = () => {
    return !!getToken();
};

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            !isLogin() ? (
                <Redirect
                    to={{
                        pathname: "/signin",
                        state: { from: props.location }
                    }}
                />
            ) : (
                <Component {...props} />
            )
        }
    />
);

export default PrivateRoute;
