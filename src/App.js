import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import Main from './pages/main';

function App() {
  return (

    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
