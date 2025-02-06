import React from "react";
import Counter from "./components/Counter";
import RichTextEditor from "./components/RichTextEditor";
import UserForm from "./components/UserForm";
import "./App.css";

const App = () => {

  return (
    <div className="main-container">
      <h1>Upliance.ai Assignment....</h1>
      <div className="top-section">
        <Counter />
        <RichTextEditor />
      </div>
      <div className="bottom-section">
        <UserForm />
      </div>
    </div>
  );
};

export default App;
