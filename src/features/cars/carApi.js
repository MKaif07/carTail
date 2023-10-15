import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/Url";

export function getAllCars() {
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/car`, {
      method: "GET",
      headers: { "content-type": "application/josn" },
    });

    const data = await response.json();
    resolve({ data });
  });
}

export function getCarWithId(id) {
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/car/${id}`, {
      method: "GET",
      headers: { "content-type": "application/josn" },
    });

    const data = await response.json();
    resolve({ data });
  });
}
