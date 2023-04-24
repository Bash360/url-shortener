const { body, param } = require('express-validator'); 
const validateResult = require('../middleware/validator');
const UrlRepo = require('../repository/url.repository');
const generateURL = require('../utils/generateShortURL');
const generateStatistics = require('../utils/generateStatistics');
const { async } = require('jshint/src/prod-params');


const ShortUrlRepo = new UrlRepo();
const encode = [body('url').isURL().withMessage('invalid URL'), validateResult,
  async (req, res, next)=>{
    try {
      const { url } = req.body;

      const originalURL = url;
      const shortURL = generateURL();
      const statistics = generateStatistics(originalURL, shortURL);
      const savedShortUrl = ShortUrlRepo.saveOne(originalURL, shortURL, statistics);
      const baseUrl = `${req.protocol}://${req.get('host')}/`;
      return res.status(200).json({ shortUrl: `${baseUrl}${savedShortUrl}` });
    

    }catch(err){
      next(err);
    }


    
  }];


const decode = [param('shortUrl').isString().withMessage('invalid short URL'), validateResult,
  async (req, res, next)=>{
    try {
      const { shortUrl } = req.params;
      const originalUrl = ShortUrlRepo.getOne(shortUrl);
    if (!originalUrl) return res.status(404).json({ message: 'short URL Path not found' });
      return res.status(200).json({ originalUrl });
    }catch(err){
      next(err);
    }
  }];

const getStatistics = [param('shortUrl').isString().withMessage('invalid short URL path'), validateResult,
  async (req, res, next) => {
    try {
      const { shortUrl } = req.params;
      const statistics = ShortUrlRepo.getStatistics(shortUrl);
      if (!statistics) return res.status(404).json({ message: 'short URL Path not found' });
      return res.status(200).json(statistics);
    } catch (err) {
      next(err);
    }
  }];

const goto = [param('shortUrl').isString().withMessage('invalid short URL'), validateResult,
  async (req, res, next) => {
    const { shortUrl } = req.params;
    const originalUrl = ShortUrlRepo.getOne(shortUrl);
    if (!originalUrl) return res.status(404).json({ message: 'short URL Path not found' });
    return res.redirect(originalUrl);
  }
];

module.exports = { encode,decode,statistics:getStatistics,goto };