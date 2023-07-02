import { getGeonamesData } from '../src/client/js/geoNames';

describe('getGeonamesData', () => {
    test('should make API call to fetch geonamesUserName', async () => {
        const mockResponse = { geo: 'relax61' };
        global.fetch = jest.fn().mockResolvedValueOnce({ json: jest.fn().mockResolvedValueOnce(mockResponse) });

        await getGeonamesData('Berlin');

        expect(global.fetch).toHaveBeenCalledWith('http://localhost:8091/api/geonamesUserName');
    });
});


