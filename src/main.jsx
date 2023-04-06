import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Books from './components/Books';
import Order from './components/Order';
import BookDetails from './components/BookDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'books',
        element:<Books></Books>,
        loader:()=>fetch('https://api.itbook.store/1.0/search/mongodb')
      },
      {
        path:'order',
        element:<Order></Order>,
        
      },
      {
        path:'order/:id',
        element:<BookDetails></BookDetails>,
       loader:(params)=>fetch(`https://api.itbook.store/1.0/books/${params.params.id}`)  
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
