import React from "react";
import { Route, Routes } from "react-router-dom";
import ArticleCreate from "./ArticleCreate";


function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={ArticleCreate}></Route>
      </Routes>
    </div>
  );
}

export default App;
