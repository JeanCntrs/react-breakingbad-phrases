import React from 'react';

const Phrase = ({ phrase }) => {
    return (
        <div className="frase">
            <h1>{phrase.quote}</h1>
            <p>- {phrase.author}</p>
        </div>
    );
}

export default Phrase;