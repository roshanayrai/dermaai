import './App.css';
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Footer from './components/Footer';

function App() {
    return (
      <div className="App">
        <header className="App-header">
            <Navbar></Navbar>
            <Homepage></Homepage>
            <Footer></Footer>
        </header>
      </div>
    );
  }
  

export default App;
