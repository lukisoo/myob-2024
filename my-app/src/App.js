import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import BrowseSuppliers from "./pages/BrowseSuppliers";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Store from "./pages/Store";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<BrowseSuppliers />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
