import {createHashRouter, RouterProvider} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './scss/all.scss'
import Character from "./Pages/Character";
import Main from './Pages/Main';
import {Provider} from "react-redux";
import {store} from "./store/store"
import "./firebase"

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createHashRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <h1> Error loading</h1>
    },
    {
        path: "card/:id",
        element: <Character/>,
        errorElement: <h1> Error card</h1>
    },
]);


root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} base={"/"}/>
        </Provider>
   </React.StrictMode>
);

