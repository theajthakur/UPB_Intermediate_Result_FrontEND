import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from "./components/Navbar";
import UserRollInput from "./components/UserRollInput";

function App() {
  return (
    <>
      <Navbar />
      <UserRollInput />
    </>
  );
}

export default App;
