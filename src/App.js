import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Route from "./Router/Routes";

function App() {
  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
}

export default App;
