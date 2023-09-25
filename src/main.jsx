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
      "image": "https://media.licdn.com/dms/image/C5103AQFl656k2-DwOg/profile-displayphoto-shrink_800_800/0/1517034956958?e=2147483647&v=beta&t=6H_aZri3qcbtlgwTyTKBceuyTEPYW43xGViq5UL4J-w",
      "address": "123 Main Street, City, Country",
      "profession": "Software Engineer",
      "mobile_number": "+1 (123) 456-7890"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaTYbDZp17hbssSPDUB03wSViTsBEjosg7Jw&usqp=CAU",
      "address": "456 Elm Street, City, Country",
      "profession": "Teacher",
      "mobile_number": "+1 (234) 567-8901"
    },
    {
      "id": 3,
      "name": "Michael Johnson",
      "email": "michael.johnson@example.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/0/03/Johnson%2C_Michael_D.jpg",
      "address": "789 Oak Street, City, Country",
      "profession": "Doctor",
      "mobile_number": "+1 (345) 678-9012"
    },
    {
      "id": 4,
      "name": "Emily Davis",
      "email": "emily.davis@example.com",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOpg2GFioFsOA78anQVpE61qp2NoFu05SnZw&usqp=CAU",
      "address": "101 Pine Street, City, Country",
      "profession": "Graphic Designer",
      "mobile_number": "+1 (456) 789-0123"
    },
    {
      "id": 5,
      "name": "David Brown",
      "email": "david.brown@example.com",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Thndv2sxZt-krL7bOeqoruQ_PhcHoESsRg&usqp=CAU",
      "address": "222 Cedar Street, City, Country",
      "profession": "Accountant",
      "mobile_number": "+1 (567) 890-1234"
    },
    {
      "id": 6,
      "name": "Sarah White",
      "email": "sarah.white@example.com",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWZE-0dpWjbOP6_GfiQI1pkP0-FzYhyeodqQ&usqp=CAU",
      "address": "333 Birch Street, City, Country",
      "profession": "Marketing Manager",
      "mobile_number": "+1 (678) 901-2345"
    },
    {
      "id": 7,
      "name": "Daniel Wilson",
      "email": "daniel.wilson@example.com",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStLG1VeRS6Mir-OPTlv0nQ_qsJ7yn2kXOK6A&usqp=CAU",
      "address": "444 Maple Street, City, Country",
      "profession": "Engineer",
      "mobile_number": "+1 (789) 012-3456"
    },
    {
      "id": 8,
      "name": "Olivia Lee",
      "email": "olivia.lee@example.com",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1_zPqypbQ8eM3RnEB-xJwWrEHQZurkKOKKw&usqp=CAU",
      "address": "555 Walnut Street, City, Country",
      "profession": "Architect",
      "mobile_number": "+1 (890) 123-4567"
    },
    {
      "id": 9,
      "name": "William Turner",
      "email": "william.turner@example.com",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1JSiWhKys3B_lEotu6oWCKG_urBU92T0_bQ&usqp=CAU",
      "address": "666 Oak Street, City, Country",
      "profession": "Lawyer",
      "mobile_number": "+1 (901) 234-5678"
    },
    {
      "id": 10,
      "name": "Mia Harris",
      "email": "mia.harris@example.com",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWQfCq98dLcD-R5n0QbBu8k4j-5NBv_mEsNQ&usqp=CAU",
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
