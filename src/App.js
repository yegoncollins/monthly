
import './App.css';
import Monthly from "./components/Monthly"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/monthly" element={<Monthly/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
