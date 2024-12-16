import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App"
import React from "react";

const Err = () => {
  return <h1>404 - Page Not Found</h1>;
};

const Page = () => {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/App" element={<App />} />
          <Route path="*" element={<Err />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Page;
