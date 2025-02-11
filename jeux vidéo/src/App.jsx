import { useEffect, useState } from "react";

function App() {
  const [games, setGames] = useState([]);


  const fetchGames = () => {
    fetch("(https://rawg.io/api/gameshttps://rawg.io/api/games?key=5f1192bb6a474201934a847e7665a319")
      .then(response => response.json())
      .then(data => setGames(data.results))
      .catch(error => console.error('Error fetching games:', error));
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <>
      <h1>Jeux vidéos</h1>
      <ul>
        {games.map(game => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App