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

  exists(originalUrl) {
    let urlExists = false;
  for (let url of Object.values(this.urlStore)) {
    if (url.originalUrl === originalUrl) {
      urlExists = true;
  }
  }
    
    return urlExists;
  }

}

module.exports = UrlRepo;