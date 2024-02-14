import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { getRandomFilms } from "./utils/api";

function App() {
  const [randomFilm, setRandomFilm] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
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
  function getRandomNumber() {
    let randNum = Math.floor(Math.random() * (30000 - 1) + 1);
    return randNum.toString();
  }
  return (
    isLoaded && (
      <div className="App">
        <Header />
        <Main
          nameRu={randomFilm.nameRu}
          description={randomFilm.description}
          coverUrl={randomFilm.posterUrlPreview}
          slogan={`"${randomFilm.slogan}"`}
          webUrl={randomFilm.webUrl}
        />
      </div>
    )
  );
}

export default App;
