import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import ResponsiveDrawer from "../components/Sidebar";
import { useEffect } from "react";
import { getAllCarsAsync } from "../features/cars/carSlice";
import { Link } from "react-router-dom";

function Car() {
  const dispatch = useDispatch();
  const carList = useSelector((state) => state.car.cars);
  const carListFetched = carList ? true : false
  // console.log(carList);

  useEffect(() => {
    console.log("fetched ");
    dispatch(getAllCarsAsync());
  }, [carListFetched]);

  return (
    <>
      {/* {carList ? JSON.stringify(carList) : "no cars"} */}
      <Navbar />
      <ResponsiveDrawer>
        {carList.map((car, i) => (
          <Link to={`/car/${car._id}`} key={car._id}>
            <Card
              // key={car._id}
              // ownerId={car.ownerId}
              // sold={car.sold}
              name={car.name}
              brand={car.brand}
              price={car.price}
              image={car.image}
            />
          </Link>
        ))}
        {/* <Card /> */}
      </ResponsiveDrawer>
    </>
  );
}

export default Car;
