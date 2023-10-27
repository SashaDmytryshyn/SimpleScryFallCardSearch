import supertest from 'supertest';
import app from '../../src/index';
import { QUERY_PARAMETER } from '../../src/backendEnvVariables/types';

describe('Search Cards Endpoint', () => {
    it('should return 404 for no cards existing with the user requested name', async () => {
        const searchQuery = 'cardwiththisnamedoesntexist';

        await supertest(app)
            .get(`/search-cards?${QUERY_PARAMETER}=${searchQuery}`)
            .expect(404);

    });
});
