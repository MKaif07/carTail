import { Link } from "react-router-dom";

function Card({ ownerId, sold, name, brand, price, image }) {
  return (
    <>
      <div className="bg-white m-2 shadow-md border border-gray-200 rounded-lg max-w-xs  dark:bg-gray-800 dark:border-gray-700">
        <img
          // className="rounded-t-lg h-13rem w-10rem"
          className="rounded-t-lg w-full"
          src={image[0]}
          alt="Car Image"
        />
        <div className="p-2">
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
            {`${brand} ${name}`}
          </h5>
          <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
            Rs {price}
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
