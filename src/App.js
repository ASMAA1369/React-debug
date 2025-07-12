import React from "react";
import Parent from "./components/Parent";
import UserInfo from "./components/UserInfo";
import './App.css'; // pour les styles cosmos

function App() {
  return (
    <div>
      <h1>Application de débogage React</h1>
      <Parent />
      <hr />
      <UserInfo user={{ name: "Kamal Oudrhiri", age: 51 }} />
    </div>
  );
}

export default App;
