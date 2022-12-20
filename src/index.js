import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App";
import {BrowserRouter} from "react-router-dom";

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter basename={baseUrl}>
        <App />
    </BrowserRouter>
);