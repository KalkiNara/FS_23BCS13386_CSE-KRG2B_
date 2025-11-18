import React from "react";
import ReactDOM from "react-dom/client";

function Child(props) {
  return (
    <div style={{ padding: "10px", border: "1px solid gray", marginTop: "10px" }}>
      <h3>Child Component</h3>
      <p>Message from App (via Parent): <strong>{props.message}</strong></p>
    </div>
  );
}


function Parent(props) {
  return (
    <div style={{ padding: "10px", border: "1px solid blue" }}>
      <h2>Parent Component</h2>
      {/* Passing message to Child */}
      <Child message={props.message} />
    </div>
  );
}

function App() {
  const appMessage = "Hello, I am a message from App Component!";

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>App Component</h1>
      {/* Passing message to Parent */}
      <Parent message={appMessage} />
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


