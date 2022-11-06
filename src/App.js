import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
