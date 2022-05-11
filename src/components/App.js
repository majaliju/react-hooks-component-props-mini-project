import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="Underreacted"/>
      <About about="A blog about learning React" img="/static/media/logo.6ce24c58.svg" />
    </div>
  );
}

export default App;
