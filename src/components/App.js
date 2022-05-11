import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
import ArticleList from ".ArticleList"

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="Underreacted"/>
      {/* so image here doesn't render; not sure where the image source is */}
      <About about="A blog about learning React" img="../assets/logo.svg" /> 
      <ArticleList />
    </div>
  );
}

export default App;
