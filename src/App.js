import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SkinProfileCreation from './pages/SkinProfileCreation';
import SkinIT from './pages/SkinI&T';
import Ingredient from './pages/Ingredient';
import WeatherAPI from './components/WeatherAPI';
import Weather from './pages/Weather';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SkinProfileCreation" element={<SkinProfileCreation />} />
          <Route path="/SkinIT" element={<SkinIT />} />
          <Route path="/Weather" element={<Weather />} />
          <Route path="/Ingredient" element={<Ingredient />} />
          <Route path="/WeatherAPI" element={<WeatherAPI />} />


          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
