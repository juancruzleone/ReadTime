import { useState, useEffect } from "react";
import Select from "../../src/components/UI/Select.tsx";
import { times } from "../utils/times.ts";
import { booksGenres } from "../utils/genres.ts";
import "../styles/home.css";

function Home() {
  const [time, setTime] = useState<number | "">("");
  const [genre, setGenre] = useState("");

  useEffect(() => {
    document.title = "Inicio | ReadTime";
  });

  return (
    <>
      <div className="home">
        <h1>ReadTime</h1>
        <h2>Búsca libros según tu tiempo disponible</h2>
      </div>
      <div className="containerSearch">
        <div className="selectsContainer">
          <Select
            options={times}
            value={time}
            onChange={setTime}
            placeholder="Selecciona el tiempo disponible"
          />

          <Select
            options={booksGenres}
            value={genre}
            onChange={setGenre}
            placeholder="Selecciona el género que desea leer"
          />
        </div>
        <div className="searchButton">
          <a href="">Buscar libros</a>
        </div>
      </div>
    </>
  );
}

export default Home;
