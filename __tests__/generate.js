const generateShortURL = require('../utils/generateShortURL');
describe('generate Short URl assumptions', () => {
  test('should check if it generates exact length of random string asked for', () => { 
    expect(generateShortURL(6).length).toBe(6);
    expect(generateShortURL(8).length).toBe(8);
    expect(generateShortURL().length).toBe(6);   
   })
  
});
