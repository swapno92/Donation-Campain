import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Card from './components/Card/Card';
import Donation from './components/Donation/Donation';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '',
        element: <Home></Home>,
        loader: () => fetch('/donate.json')
      },
      {
        path: 'donate/:id',
        element: <Card></Card>,
        loader: () => fetch('/donate.json')
      },
      {
        path: '/donation',
        element: <Donation></Donation>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
