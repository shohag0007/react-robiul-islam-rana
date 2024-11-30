import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import RobiulVai from './components/RobiulVai/RobiulVai.jsx';
import Success from './components/Success/Success.jsx';
import Celebration from './components/Celebration/Celebration.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },

  {
    path: "/robiulvai",
    element: <RobiulVai></RobiulVai>,
  },
  {
    path: "/success",
    element: <Success></Success>
  },
  {
    path: "/celebration",
    element: <Celebration></Celebration>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
