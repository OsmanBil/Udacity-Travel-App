const request = require('supertest');
const { app } = require('../src/server/server');

describe('GET /api/geonamesUserName', () => {
    it('should respond with geoUsername', async () => {
      const response = await request(app).get('/api/geonamesUserName');
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({ geo: process.env.GEO_USERNAME });
    });
  });

  describe('GET /api/weatherbitKey', () => {
    it('should respond with weatherbitApiKey', async () => {
      const response = await request(app).get('/api/weatherbitKey');
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({ weatherbitKey: process.env.WEATHERBIT_API_KEY });
    });
  });
  
  describe('GET /api/pixabayKey', () => {
    it('should respond with pixabayApiKey', async () => {
      const response = await request(app).get('/api/pixabayKey');
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({ pixabayKey: process.env.PIXABAY_API_KEY });
    });
  });
