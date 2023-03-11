import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Card from "./Components/Card";
import {Provider} from "react-redux";

import {store} from "./store/store"
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <h1> Error card</h1>
    },
    {
        path: "card/:id",
        element: <Card/>,
        errorElement: <h1> Error card</h1>
    }
]);


root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);

