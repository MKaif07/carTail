import { BASE_URL } from "../../constants/Url";


export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch(BASE_URL + "/user/register", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function login(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch(BASE_URL + "/user/login", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function getAllUser() {
  return new Promise(async (resolve) => {
    const response = await fetch(BASE_URL + "/user", {
      method: "GET",
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    // console.log(data);
    resolve({ data });
  });
}
