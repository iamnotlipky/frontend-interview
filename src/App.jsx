import * as React from "react";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import AllPost from "./pages/AllPost";
import AddNew from "./pages/AddNew";
import Preview from "./pages/Preview";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route exac path="/" element={<AllPost />} />
        <Route exac path="/addNew" element={<AddNew />} />
        <Route exac path="/preview" element={<Preview />} />
        <Route exac path="/postDetail" element={<PostDetail />} />
      </Routes>
    </div>
  );
}

export default App;
