import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getCarWithIdAsync } from "../features/cars/carSlice";
import { useParams } from "react-router-dom";

const slideImages = [
  "https://cdn.pixabay.com/photo/2016/02/13/13/11/oldtimer-1197800_1280.jpg",
  "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80",
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
];

function ImageView() {
  const [image, setImage] = useState("");
  const handleImageClick = (img) => {
    console.log("reason");
    setImage(() => img);
  };

  const params = useParams();
  const dispatch = useDispatch();
  const car = useSelector((state) => state.car.selectedCar);
  let carFetched = car ? true : false;
  // let carId = params.id;

  useEffect(() => {
    console.log("Single Car ");
    dispatch(getCarWithIdAsync(params.id));
    if (carFetched) {
      setImage(() => car.image[0]);
    }
  }, [carFetched, params.id]);

  return (
    <>
      {car ? (
        <div className="flex row-span-2 justify-between">
          {/* LEFT */}
          <div className="border-red-800 w-full border-2 flex justify-around flex-col">
            <h1>Car Images</h1>
            <div className="mx-5 my-5 object-contain">
              <img
                className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
                src={image}
              />
            </div>
            <div className="px-2 flex flex-row">
              {car.image.map((img) => (
                <img
                  className="m-2 w-20"
                  key={img}
                  src={img}
                  onClick={() => handleImageClick(img)}
                />
              ))}
            </div>
            <p>{car._id}</p>
            <br />
            <p>{params.id}</p>
          </div>

          {/* RIGHT */}
          <div className="w-3/6  border-yellow-500 border-2">
            <div className=" ">
              <pre>
                <h1>{car.name}</h1>
                <h3>{car.brand}</h3>
                <p>{car.year}</p>
              </pre>
              <p>Rs {car.price}</p>
              <button className="bg-green-900">BUY </button>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default ImageView;
