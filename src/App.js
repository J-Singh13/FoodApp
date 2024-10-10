import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Sucess from "./Pages/Sucess";
import Error from "./Pages/Error";
import ProtectedRoute from "./Components/ProtectedRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sucess" element={<ProtectedRoute element={<Sucess />} />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
