import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {client} from "./Components/Services/Api.jsx";
import { PrismicProvider } from '@prismicio/react';

ReactDOM.createRoot(document.getElementById('root')).render(
    <PrismicProvider client={client}>
        <App /> 
    </PrismicProvider>
)
