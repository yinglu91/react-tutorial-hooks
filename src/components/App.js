import React from 'react';
import Table from './Table';
import Counter from './hooks/Counter';
import Joke from './hooks/Joke';
import Stories from './hooks/Stories';

const App = () => {
  return (
    <div className="container">
      <hr />
      <hr />
      <hr />
      <Counter />

      <hr />
      <Joke />

      <hr />
      <hr />
      <Stories />

      <hr />
      <hr />
      <hr />
      <Table />
    </div>
  );
}

export default App;
