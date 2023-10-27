import React from 'react';
import { Card } from '../envVariables/types';

interface SingleCardProps {
    card: Card;
}

const SingleCard: React.FC<SingleCardProps> = ({ card }) => {
    const normalImageUri = card.image_uris && card.image_uris.normal;

    return (
        <div className="bg-blue-500 p-4 mx-auto my-6 rounded-lg w-1/2 center">
            <h3 className="text-center text-white text-2xl font-bold italic mb-2">Name: {card.name}</h3>
            <p className="text-center text-white italic">Set Name: {card.set_name}</p>
            <p className="text-center text-white italic">Rarity: {card.rarity}</p>
            <p className="text-center text-white italic">Number: {card.collector_number}</p>
            {normalImageUri && <img
                src={normalImageUri}
                alt="Normal Sized"
                className="mx-auto max-w-full border-2 border-white rounded-md" />}

        </div>
    );
};

export default SingleCard;
