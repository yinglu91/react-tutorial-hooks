import React from 'react';
import Table from './Table';
import Counter from './hooks/Counter';
import Joke from './hooks/Joke';
import Stories from './hooks/Stories';

const App = () => {
  const characters = [
    {
      name: 'Charlie',
      job: 'Janitor',
    },
    {
      name: 'Mac',
      job: 'Bouncer',
    },
    {
      name: 'Dee',
      job: 'Aspring actress',
    },
    {
      name: 'Dennis',
      job: 'Bartender',
    },
  ]

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
      <Table characterData={characters} />
    </div>
  );
}

export default App;
