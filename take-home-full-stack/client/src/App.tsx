import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import CardList from './components/CardList';
import { Card } from './envVariables/types';
import './styles/generatedTailwind.css';

function App() {
  const [cardData, setCardData] = useState<Card[]>([]);
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);

  return (
    <div>
      <h1 className='text-center text-4xl font-bold underline'>Scryfall Card Search</h1>
      <SearchBar setCardData={setCardData} setNextPageUrl={setNextPageUrl} />
      <CardList initialCards={cardData} nextPageUrlInitial={nextPageUrl} />
    </div>
  );
}

export default App;
