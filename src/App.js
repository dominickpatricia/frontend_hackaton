import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import Main from './pages/main';
import Form from './pages/form';

function App() {
  return (

    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/register" element={<Form />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
