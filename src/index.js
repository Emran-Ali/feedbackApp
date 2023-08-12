import React from "react"
// import ReactDOM from "react-dom/client"
import './index.css'
import App from './App'
//new added
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,
//     document.getElementById('root'));
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
)