import { APIURL } from "./data";
import { getNameOfMOnth } from "./utils";

export function getRandomFilms(randNum) {
  return fetch(`${APIURL}films/${randNum}`, {
    method: "GET",
    headers: {
      "X-API-KEY": "f1740997-3e47-4ace-a876-3756001a68d5",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
export function getPremieres() {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let nameMonth = getNameOfMOnth(month.toString());
  return fetch(`${APIURL}films/premieres?year=${year}&month=${nameMonth}`, {
    method: "GET",
    headers: {
      "X-API-KEY": "f1740997-3e47-4ace-a876-3756001a68d5",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
