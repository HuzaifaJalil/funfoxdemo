import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ElemmentsPage, ExamplesPage } from "./Pages";
import { Footer } from "./Components";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ElemmentsPage />} />
        <Route path="/example" element={<ExamplesPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
