import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Work from "./pages/Work";
import UserDetails from "./pages/UserDetails";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<UserDetails />} />
      </Routes>
    </div>
  );
};

export default App;
