import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body.js";


const AppLayout = ()=>{
    return (
    <div>
    <Header/>
     <Body/>
     </div>
    
    );
}

const root = ReactDOM.createRoot(document.querySelector('.container'));

root.render(<AppLayout/>);