import express, { Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import { QUERY_PARAMETER } from './backendEnvVariables/types';
import cors from 'cors';

dotenv.config();

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
//it should be impossible for a user to submit more than 1 API request per second
const limiter = rateLimit({
  windowMs: 1000,
  max: 1,
  message: 'Rate limit exceeded. Please wait a moment.',
});

app.use('/search-cards', limiter);

app.get('/search-cards', async (req: Request, res: Response) => {
  try {
    const searchQuery = req.query[QUERY_PARAMETER];

    const response = await axios.get(`${process.env['SCRYFALL_API_URL_SEARCH_CARDS']}?`, {
      params: {
        [QUERY_PARAMETER]: searchQuery,
      },
    });

    const cards = response.data;

    res.json(cards);
  } catch (error: any) {
    console.error(error);
    //does the API give us an error reason?
    if (error.response && error.response.data && error.response.data.details) {
      res.status(404).json({ error: error.response.data.details });
    } else {
      res.status(500).json({ error: 'An error occurred while fetching the card.' });
    }
  }
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}.`);
});

export default app;
