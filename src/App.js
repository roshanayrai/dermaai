import './App.css';
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
function App() {
    return (
      <div className="App">
        <header className="App-header">
            <Navbar></Navbar>
            <Homepage></Homepage>
        </header>
      </div>
    );
  }
  

export default App;
