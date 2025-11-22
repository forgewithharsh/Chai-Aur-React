import React from "react";
import "./App.css";
import UserContext from "./context/UserContext";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
    </UserContextProvider>
  );
}

export default App;
