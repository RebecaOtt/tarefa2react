import React, { useEffect, useState } from 'react';
import './App.css';
import { Container } from "./components/Container"
import { Title } from './components/Title'
import { Table } from "./components/Table"
import { movies } from "./components/Movies"

function App() {
  const [search, setSearch] = useState('');

  const filteredMovies = movies.filter((movie) =>
    movie.nome.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    console.log("dispara o search toda vez q muda")
  }, [search])

  useEffect(() => {
    console.log("executa somente na primeira renderizacao")
  }, [])

  useEffect(() => {
    console.log("executa toda hora")
  })

  return (
    <div className="App">
      <header className="App-header">

        <Container children={<Title />} />

        <input type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)} />

        <Container>
          <Table movies={filteredMovies} />
        </Container>
      </header>
    </div>
  );
}

export default App;
