import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App/App";
// import { BrowserRouter as Router } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider, ReactReduxContext } from "react-redux";
import store, { history } from "./store/store";

let lastHistoryHref;
history.listen(location => {
    const currentHistoryHref = history.createHref(location);

    if (lastHistoryHref !== currentHistoryHref && window.updateAvailable) {
        window.location.href = currentHistoryHref;
    }

    lastHistoryHref = currentHistoryHref;
});

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history} context={ReactReduxContext}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById("app")
);
