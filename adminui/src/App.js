import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { getHistory, configStore } from "./containers/configureStore";
import Layout from "./containers/Layout";
import PublisherPage from "./containers/PublisherPage";
import SigninPage from "./containers/SigninPage";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const store = configStore();

function App() {
    return (
        <Router>
            <Provider store={store}>
                <ConnectedRouter history={getHistory()}>
                    <Switch>
                        <Route path="/publisher" exact>
                            <Layout>
                                <PublisherPage />
                            </Layout>
                        </Route>
                        <Route path="/signin" exact>
                            <SigninPage />
                        </Route>
                        <Route path="/">
                            <PublisherPage />
                        </Route>
                    </Switch>
                </ConnectedRouter>
            </Provider>
        </Router>
    );
}

export default App;
