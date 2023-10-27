export type Card = {
    name: string;
    set_name: string;
    rarity: string;
    collector_number: number;
    image_uris: {
        small: string;
        normal: string;
        large: string;
        png: string;
        art_crop: string;
        border_crop: string;
    };
};

export const LOCAL_NODEJS_SCRYFALL_ACCESSPOINT: string = 'http://localhost:3001/search-cards'

export const QUERY_PARAMETER: string = 'q'