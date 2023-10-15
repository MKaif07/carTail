import Login from "./components/login";
import SellCar from "./components/sellCar";
import Signup from "./components/signup";
import Car from "./page/Car";
import CarDetail from "./page/CarDetails";
import Home from "./page/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Temp from "./page/temp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/car/:id",
    element: <CarDetail />,
  },
  {
    path: "/car",
    element: <Car />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sell",
    element: <SellCar />,
  },
  {
    path: "/temp",
    element: <Temp />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
