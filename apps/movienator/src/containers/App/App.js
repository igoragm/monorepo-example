import React, { PureComponent } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";

export default class App extends PureComponent {
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
