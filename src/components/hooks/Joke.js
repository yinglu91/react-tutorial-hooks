import React, {useState,useEffect}  from 'react';

const url = 'https://official-joke-api.appspot.com/jokes/random';

function Joke() {
    const [result, setResult] = useState({});

    useEffect(() => {
      fetch(url)
        .then(response => response.json())
        .then(json => setResult(json));
    }, []);

  if (!result) {
      return <div>loading...</div>;
  }

  console.log(result);
  const { setup, punchline } = result;
  return (
    <div>
      <h3>Joke of the session</h3>
      <p>{setup}</p>
      <p><em>{punchline}</em></p>
    </div>
  )
}

export default Joke;
