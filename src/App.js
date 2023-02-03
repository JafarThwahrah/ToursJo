import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import React from "react";
import { useState } from "react";
export const loginDataContext = React.createContext();

function App() {
  const [loginDataUseContext, setLoginDataUseContext] = useState();
  // console.log(loginDataUseContext);
  return (
    <div className="App">
      <BrowserRouter>
        <loginDataContext.Provider value={setLoginDataUseContext}>
          <Header />
          <Pages />
        </loginDataContext.Provider>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
