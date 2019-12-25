import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Phrase from './components/Phrase';

const App = () => {

  const [phrase, setPhrase] = useState({});

  const consultApi = async () => {
    const result = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    setPhrase(result.data[0]);
  }

  useEffect(() => {
    consultApi();
  }, []);

  return (
    <div className="contenedor">
      <Phrase
        phrase={phrase}
      />
      <button onClick={consultApi}>Generar Nueva</button>
    </div>
  );
}

export default App;