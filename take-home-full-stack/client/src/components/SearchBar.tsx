import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, LOCAL_NODEJS_SCRYFALL_ACCESSPOINT, QUERY_PARAMETER } from '../envVariables/types';

interface SearchBarProps {
  setCardData: React.Dispatch<React.SetStateAction<Card[]>>;
  setNextPageUrl: React.Dispatch<React.SetStateAction<string | null>>;

}

const SearchBar: React.FC<SearchBarProps> = ({ setCardData, setNextPageUrl }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const searchCardUrl = `${LOCAL_NODEJS_SCRYFALL_ACCESSPOINT}?`;

    const fetchData = async () => {
      try {
        const response = await axios.get(searchCardUrl, {
          params: { [QUERY_PARAMETER]: searchQuery },
        });
        setCardData(response.data.data);
        if (response.data.has_more) {
          setNextPageUrl(response.data.next_page);
        } else {
          setNextPageUrl(null);
        }
      } catch (error) {
        console.error(error);
        setCardData([]);
        setNextPageUrl(null);
      }
    };

    const handleDebounce = () => {
      if (timer) {
        clearTimeout(timer);
      }
      setTimer(setTimeout(fetchData, 1000));
    };

    if (searchQuery) {
      handleDebounce();
    }

    return () => {
      // Reset the timer when searchQuery changes
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [searchQuery, setCardData, setNextPageUrl]);

  return (
    <div >
      <input
        className="text-center block mx-auto my-auto p-1 border border-gray-300 shadow-md"
        type="text"
        placeholder="Search for a card"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
