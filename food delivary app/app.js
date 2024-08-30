import React from "react";
import ReactDOM from "react-dom/client";

const AppLayout = ()=>{
    return (<h1>this is app layout</h1>);
}

const root = ReactDOM.createRoot(document.querySelector('.container'));

root.render(<AppLayout/>);