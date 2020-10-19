import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { getHistory, configStore } from "./containers/configureStore";
import Layout from "./containers/Layout";
import PublisherPage from "./containers/PublisherPage";

const store = configStore();

function App() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={getHistory()}>
                <Layout>
                    <PublisherPage />
                </Layout>
            </ConnectedRouter>
        </Provider>
    );
}

export default App;
