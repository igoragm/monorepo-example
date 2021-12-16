import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import "antd/dist/antd.css";

export default class App extends Component {
    render() {
        return (
            <Switch>
                {routes.map(({ auth, path, page: Page, ...rest }, index) => (
                    <Route key={index} path={path} render={props => <Page {...props} {...rest} />} {...rest} />
                ))}
            </Switch>
        );
    }
}
