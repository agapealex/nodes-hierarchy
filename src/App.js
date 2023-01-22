import "./App.css";
import React from "react";
import Main from "./components/Main/main";
import Theme from "./common/Theme";

function App() {
  return (
    <div className="App">
      <Theme>
        <Main />
      </Theme>
    </div>
  );
}

export default App;
