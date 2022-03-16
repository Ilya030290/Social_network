import {store} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <App store={store}
             dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    );
}