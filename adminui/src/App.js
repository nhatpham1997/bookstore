import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { getHistory, configStore } from "./containers/configureStore";
import Layout from "./containers/Layout";
import PublisherPage from "./containers/PublisherPage";
import CategoryPage from "./containers/CategoryPage";
import AuthorPage from "./containers/AuthorPage";
import SigninPage from "./containers/SigninPage";
import PrivateRoute from "./containers/shared/routes/PrivateRoute";
import AuthRoute from "./containers/shared/routes/AuthRoute";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const store = configStore();

function App() {
    return (
        <Router>
            <Provider store={store}>
                <ConnectedRouter history={getHistory()}>
                    <Switch>
                        <PrivateRoute
                            path="/publisher"
                            exact
                            component={() => (
                                <Layout>
                                    <PublisherPage />
                                </Layout>
                            )}
                        ></PrivateRoute>
                        <PrivateRoute
                            path="/category"
                            exact
                            component={() => (
                                <Layout>
                                    <CategoryPage />
                                </Layout>
                            )}
                        ></PrivateRoute>
                        <PrivateRoute
                            path="/author"
                            exact
                            component={() => (
                                <Layout>
                                    <AuthorPage />
                                </Layout>
                            )}
                        ></PrivateRoute>
                        <AuthRoute
                            path="/signin"
                            exact
                            component={SigninPage}
                        ></AuthRoute>
                        <PrivateRoute
                            path="/"
                            component={() => (
                                <Layout>
                                    <div>Home Page</div>
                                </Layout>
                            )}
                        ></PrivateRoute>
                    </Switch>
                </ConnectedRouter>
            </Provider>
        </Router>
    );
}

export default App;
