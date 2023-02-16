import React from "react";
import ReactDOM from "react-dom";
import Context,{firebaseContext}  from "./store/FirebaseContext";
import firebase from "./firebase/config";
import App from "./App";

ReactDOM.render(
  <firebaseContext.Provider value={{ firebase }}>
  <Context>
      <App />
  </Context>
  
  </firebaseContext.Provider>,
  document.getElementById("root")
);


