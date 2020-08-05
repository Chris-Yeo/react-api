import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';

const App = () => {
  const [giphy, setGiphy] = useState ([]);
  const [loading, setLoading] = useState (true);
  const [error, setError] = useState (false);
  const [errorMessage, setErrorMessage] = useState ();

  useEffect (() => {
    const url='https://api.giphy.com/v1/gifs/search?q=food&api_key=Vls5MyeXXm31FecUyfEfuLCaEPMF287H&limit=9';
    axios.get(url)
    .then(function(result) {
      console.log(result)
     setGiphy(result.data.data);
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
              giphy.map((item) => (
              
                  <div className="whole">
                    <div className="image"><img src={item.images.original.url} alt="giphy" /></div>
                    <div className="title"> <h3>{item.title}</h3></div>
                    <div className="description"><p>{item.type}</p></div>
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