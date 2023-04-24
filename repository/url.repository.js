class UrlRepo{
 urlStore = {};
  
   saveOne(originalUrl,shortUrl,statistics) {
     this.urlStore[shortUrl] = { originalUrl, statistics };
     return shortUrl;
   }
  
  getOne(shortUrl) {
    if (!this.urlStore[shortUrl]) return null;
    return this.urlStore[shortUrl].originalUrl;
  }

  getStatistics(shortUrl){
    return this.urlStore[shortUrl].statistics;
  }

  
}

module.exports = UrlRepo;