import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { getPremieres, getRandomFilms } from "./utils/api";

function App() {
  const [randomFilm, setRandomFilm] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [premieres, setPremieres] = useState("");
  let film = {};
  useEffect(() => {
    do {
      getRandomFilms(getRandomNumber()).then((res) => {
        if (res.nameRu !== null || res.description !== null) {
          film = res;
          setRandomFilm(res);
          setIsLoaded(true);
          console.log(res);
        }
      });
    } while (film.nameRu === null);
  }, []);
  useEffect(() => {
    getPremieres().then((res) => {
      setPremieres(res);
    });
  }, []);
  function getRandomNumber() {
    let randNum = Math.floor(Math.random() * (30000 - 1) + 1);
    return randNum.toString();
  }

  return (
    isLoaded && (
      <div className="App">
        <Header />
        <Main premieres={premieres} randomFilm={randomFilm} />
      </div>
    )
  );
}

export default App;
