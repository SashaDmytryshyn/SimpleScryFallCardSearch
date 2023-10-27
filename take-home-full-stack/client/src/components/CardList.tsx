import React, { useState, useEffect, useRef } from 'react';
import { Card } from '../envVariables/types';
import SingleCard from './SingleCard';
import axios from 'axios';
import debounce from 'lodash.debounce';

interface CardListProps {
  initialCards: Card[];
  nextPageUrlInitial: string | null;
}

const CardList: React.FC<CardListProps> = ({ initialCards, nextPageUrlInitial }) => {
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(nextPageUrlInitial);
  const [isLoading, setIsLoading] = useState(false);
  const [cardData, setCardData] = useState(initialCards);

  useEffect(() => {
    // Watch for changes in initialCards and update cardData
    setCardData(initialCards);
    setNextPageUrl(nextPageUrlInitial);
  }, [initialCards, nextPageUrlInitial]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      if (scrollTop + windowHeight >= documentHeight - 100) {
        loadMoreData();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //only allow loadmoreData to call the API once a sec
  const loadMoreData = useRef(debounce(async () => {
    if (nextPageUrl) {
      setIsLoading(true);
      try {
        const response = await axios.get(nextPageUrl);
        const newCardData = response.data.data;
        setNextPageUrl(response.data.next_page);
        setCardData([...cardData, ...newCardData]);

      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  }, 1000)).current;

  return (
    <div className="card-list">
      {cardData.map((card, index) => {
        return <SingleCard key={index} card={card} />
      })}
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default CardList;
