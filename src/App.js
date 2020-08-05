import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';

const App = () => {
  const [news, setNews] = useState ([]);
  const [loading, setLoading] = useState (true);
  const [error, setError] = useState (false);
  const [errorMessage, setErrorMessage] = useState ();

  useEffect (() => {
    const url='https://newsapi.org/v2/top-headlines?pageSize=9&sources=bbc-news&apiKey=ed2eab71ff4c44ed8fab3ef43f305400';
    axios.get(url)
    .then(function(result) {
      console.log(result)
     setNews(result.data.articles);
      setLoading(false)
    })
    .catch(function(error) {
      setError(true);
      console.log(error.messsage)
      setErrorMessage(error.message)
      setLoading(false);
    });
  },[]);

  return (
    <div className="App">
      <h2>My API</h2>
      <div className="content">
      {loading ? (
        <div className="lds-circle"><div></div></div>
      ) : (
          error ? (
            <div>{errorMessage}</div>
          ) : (
              news.map((item) => (
              
                  <div className="whole">
                    <div className="image"><img src={item.urlToImage} alt="news" /></div>
                    <div className="title"> <h3>{item.title}</h3></div>
                    <div className="description"><p>{item.description}</p></div>
                  </div>
                
            ))
          )
      )
      }
      </div>
    </div>
  );
};

export default App;