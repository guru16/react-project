import React from 'react';
import ReactDOM from 'react-dom';

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I'm h1 tag")
  )
);
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from react"
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
