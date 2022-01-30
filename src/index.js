import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./context/ThemeContext";
import { QueryClient, QueryClientProvider } from "react-query"
import {Provider as ReduxProvider} from "react-redux"
import store from "./reduxStore"
import { persistor } from './reduxStore';
import { PersistGate } from 'redux-persist/integration/react'
const queryClient = new QueryClient()
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <PersistGate loading={null} persistor={persistor}> 
    <ReduxProvider store={store}> 
      <ThemeContextProvider>
      <QueryClientProvider client={queryClient}>
        <App />
        </QueryClientProvider>
      </ThemeContextProvider>
      </ReduxProvider> 
      </PersistGate> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
