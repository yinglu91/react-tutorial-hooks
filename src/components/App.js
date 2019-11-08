import React from 'react';
import Table from './Table';
import Counter from './hooks/Counter';

const App = () => {
  return (
    <div className="container">
      <Counter />
      <Table />
    </div>
  );
}

export default App;
