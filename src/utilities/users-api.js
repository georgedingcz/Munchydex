// //This is the base path of the Express route we'll define
// const BASE_URL = "/api/users";

// export async function signUp(userData) {
//   //Fetch uses an options object as a second arg to make requests
//   //other than basic GET request, include data, headers, etc.
//   const res = await fetch(BASE_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     //Fetch requires data payloads to be stringified
//     //and assigned to a body property on the options object
//     body: JSON.stringify(userData),
//   });
//   //Check if request was successful
//   if (res.ok) {
//     //res.json() will resolve to the JWT
//     return res.json();
//   } else {
//     throw new Error("Invalid Sign Up");
//   }
// }

// export async function login(credentials) {
//   //Fetch uses an options object as a second arg to make requests
//   //other than basic GET request, include data, headers, etc.
//   const res = await fetch(BASE_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     //Fetch requires data payloads to be stringified
//     //and assigned to a body property on the options object
//     body: JSON.stringify(credentials),
//   });
//   //Check if request was successful
//   if (res.ok) {
//     //res.json() will resolve to the JWT
//     return res.json();
//   } else {
//     throw new Error("Invalid Sign Up");
//   }
// }

// Add the following import
import sendRequest from "./send-request";
const BASE_URL = "/api/users";

// Refactored code below
export function signUp(userData) {
  return sendRequest(BASE_URL, "POST", userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}