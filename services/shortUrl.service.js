const { body, param } = require('express-validator'); 
const validateResult = require('../middleware/validator');
const UrlRepo = require('../repository/url.repository');
const generateURL = require('../utils/generateShortURL');
const generateStatistics = require('../utils/generateStatistics');


const ShortUrlRepo = new UrlRepo();
const encode = [body('url').isURL().withMessage('invalid URL'), validateResult,
  async (req, res, next)=>{
    try {
      const { url } = req.body;
      const urlExists = ShortUrlRepo.exists(url);
      if (urlExists) {
        return res.status(400).json({ message: 'URL exist' });
      }

      const originalURL = url;
      const shortURL = generateURL();
      const statistics = generateStatistics(originalURL, shortURL);
      const savedShortUrl = ShortUrlRepo.saveOne(originalURL, shortURL, statistics);
      return res.status(200).json({ shortUrl: savedShortUrl });
    

    }catch(err){
      next(err);
    }


    
  }];


module.exports = { encode };