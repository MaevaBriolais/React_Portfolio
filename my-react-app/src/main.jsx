import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import App from './App.jsx';
import ContactPage from './pages/ContactPage.jsx';
import DiplomesPage from './pages/Diplomes.jsx';
import ExperiencePage from './pages/Experience.jsx';

const router = createBrowserRouter([
  {
    element: <App/>,
    path: "/",
  },
  {
    path: "/ContactPage",
    element: <ContactPage/>,
  },
  {
    path: "/DiplomesPage",
    element: <DiplomesPage/>,
  },
  {
    path: "/ExperiencePage",
    element: <ExperiencePage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
