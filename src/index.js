import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Router,
} from "react-router-dom";
import SkinProfileCreation from './pages/SkinProfileCreation';
import Weather from './pages/Weather';
import SkinIT from './pages/SkinI&T';
import Ingredient from './pages/Ingredient';
import WeatherAPI from './components/WeatherAPI';
const router = createBrowserRouter([
  {
  path:"/",
  element: <App />,
  },
  {
    path:"Homepage",
    element: < Homepage/>,
  },
  ,
  {
    path:"Login",
    element: < Login/>,
  }
  ,
  {
    path:"Signup",
    element: <Signup/>,
  }
  ,
  {
    path:"SkinProfileCreation",
    element: <SkinProfileCreation/>,
  }
  ,
  {
    path:"SkinIT",
    element: <SkinIT/>,
  }
  ,
  {
    path:"Weather",
    element: <Weather/>,
  }
  ,
  {
    path:"Ingredient",
    element: <Ingredient/>,
  }
  ,
  {
    path:"WeatherAPI",
    element: <WeatherAPI/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
