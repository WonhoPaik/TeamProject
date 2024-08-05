import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {ScheduleProvider} from "./context/ScheduleContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <ScheduleProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ScheduleProvider>
)
