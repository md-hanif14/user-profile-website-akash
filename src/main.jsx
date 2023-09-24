import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import ViewDetails from './components/ViewDetails/ViewDetails.jsx';


const store = createStore(() => ({
  users: [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "image": "images/1.jpg",
      "address": "123 Main Street, City, Country",
      "profession": "Software Engineer",
      "mobile_number": "+1 (123) 456-7890"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "image": "images/2.jpg",
      "address": "456 Elm Street, City, Country",
      "profession": "Teacher",
      "mobile_number": "+1 (234) 567-8901"
    },
    {
      "id": 3,
      "name": "Michael Johnson",
      "email": "michael.johnson@example.com",
      "image": "images/3.jpg",
      "address": "789 Oak Street, City, Country",
      "profession": "Doctor",
      "mobile_number": "+1 (345) 678-9012"
    },
    {
      "id": 4,
      "name": "Emily Davis",
      "email": "emily.davis@example.com",
      "image": "images/4.jpg",
      "address": "101 Pine Street, City, Country",
      "profession": "Graphic Designer",
      "mobile_number": "+1 (456) 789-0123"
    },
    {
      "id": 5,
      "name": "David Brown",
      "email": "david.brown@example.com",
      "image": "images/5.jpg",
      "address": "222 Cedar Street, City, Country",
      "profession": "Accountant",
      "mobile_number": "+1 (567) 890-1234"
    },
    {
      "id": 6,
      "name": "Sarah White",
      "email": "sarah.white@example.com",
      "image": "images/6.jpg",
      "address": "333 Birch Street, City, Country",
      "profession": "Marketing Manager",
      "mobile_number": "+1 (678) 901-2345"
    },
    {
      "id": 7,
      "name": "Daniel Wilson",
      "email": "daniel.wilson@example.com",
      "image": "images/7.jpg",
      "address": "444 Maple Street, City, Country",
      "profession": "Engineer",
      "mobile_number": "+1 (789) 012-3456"
    },
    {
      "id": 8,
      "name": "Olivia Lee",
      "email": "olivia.lee@example.com",
      "image": "images/8.jpg",
      "address": "555 Walnut Street, City, Country",
      "profession": "Architect",
      "mobile_number": "+1 (890) 123-4567"
    },
    {
      "id": 9,
      "name": "William Turner",
      "email": "william.turner@example.com",
      "image": "images/9.jpg",
      "address": "666 Oak Street, City, Country",
      "profession": "Lawyer",
      "mobile_number": "+1 (901) 234-5678"
    },
    {
      "id": 10,
      "name": "Mia Harris",
      "email": "mia.harris@example.com",
      "image": "images/10.jpg",
      "address": "777 Pine Street, City, Country",
      "profession": "Artist",
      "mobile_number": "+1 (012) 345-6789"
    }
  ]
}));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/view/:id",
    element: <ViewDetails></ViewDetails>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
