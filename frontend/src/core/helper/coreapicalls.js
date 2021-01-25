import { API } from "../../backend";

export const getProducts = () => {
  console.log(typeof API);
  const url = "http://localhost:8000/api/v1/product/";
  // return fetch(`${API}product/`, { method: "GET" })
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .catch((err) => console.log(err));
  return fetch(url, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
// fetch returns a promise which you can use then and catch

// import { API } from "../../backend";

// export const getProducts = async () => {
//   try {
//     const response = await fetch(`${API}product`, { method: "GET" });
//     return response.json();
//   } catch (err) {
//     return console.log(err);
//   }
// };
