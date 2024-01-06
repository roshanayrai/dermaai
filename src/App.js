import './App.css';
import homepage from './pages/homepage';
function App() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Header-container">
            <div className="Header-logo">
              <h1 className="App-name">DERMA AI</h1>
            </div>
            <nav className="Header-nav">
              <ul>
                <li><Link to ="/homepage">Skin Identification</></li>
                <li><a href="#ingredient-analysis">Ingredient Analysis</a></li>
                <li><a href="#dermatologist-recommendation">Dermatologist Recommendation</a></li>
                <li><a href="#skin-identification">Product Reommendation</a></li>
        </ul>
            </nav>
            <div className="Header-account">
              <a href="#account" className="Header-account-icon">
                {/* You can use an icon library or your custom icon */}
                <img src="account-icon.png" alt="Account" />
              </a>
            </div>
          </div>
         
        </header>
      </div>
    );
  }
  

export default App;
