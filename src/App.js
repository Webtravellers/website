import React, { Suspense } from "react";
import { Button } from "reactstrap";
import Router from "./routes/Router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Suspense fallback="loading">
      <ToastContainer />
      <Router />
    </Suspense>
  );
};

export default App;
