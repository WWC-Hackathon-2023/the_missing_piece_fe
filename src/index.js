import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Views/home/home.jsx";
import Index from "./Components/Views/index/index.jsx";
import SignUp from "./Components/Views/signUp/signUp.jsx";
import Login from "./Components/Views/login/login.jsx";
import Dashboard from "./Components/Views/dashboard/dashboard.jsx"
import PuzzleShowPage from './Components/Views/puzzleShowPage/puzzleShowPage.jsx';
import AddNewPuzzle from './Components/Views/addNewPuzzle/addNewPuzzle.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/index",
    element: <Index />,
  },
  {
    path: "/signUp",
    element: < SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/puzzleShowPage",
    element: <PuzzleShowPage />,
  },
  {
    path: "/addNewPuzzle",
    element: <AddNewPuzzle />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
