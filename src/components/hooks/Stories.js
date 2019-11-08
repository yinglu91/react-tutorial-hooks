import React from 'react';
import useFetch from './useFetch';

function Stories() {
  const stories = useFetch('https://news-proxy-server.appspot.com/topstories', []);

  if (!stories) {
    return <div>loading...</div>;
    }

console.log(stories);

  return (
    <div className='Stories'>   
      <h3>Stories</h3>
      {
        stories.map(story => {
          const { id, by, time, title, url } = story;

          return (
            <div key={id}>
              <a href={url} target="_blank">{title}</a>
              <div>{by} - {new Date(time * 1000).toLocaleString()}</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Stories;
