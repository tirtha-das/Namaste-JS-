import React from 'react';
import ReactDOM from "react-dom";

let root = ReactDOM.createRoot(document.querySelector('.container'));

// let parent = React.createElement('div',{id:"parent"},[
//     React.createElement('div',{id:"child1"},[
//         React.createElement('h1',{},`I'm h1 tag`),
//         React.createElement('h2',{},`I'm h2 tag`),
//     ]),
//     React.createElement('div',{id:"child2"},[
//         React.createElement('h1',{},`I'm h1 tag`),
//         React.createElement('h2',{},`I'm h2 tag`),
//     ])
// ]);

let parent = <h1>hello guys<spam>I am in spam</spam></h1>

root.render(parent);