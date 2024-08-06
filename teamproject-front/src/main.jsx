import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {ScheduleProvider} from "./context/ScheduleContext.jsx";
import {Provider} from "react-redux";
import store from "./store/store.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <ScheduleProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ScheduleProvider>
    </Provider>
)
