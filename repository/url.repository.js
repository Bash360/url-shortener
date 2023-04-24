class UrlRepo{
 urlStore = {};
  
   saveOne(originalUrl,shortUrl,statistics) {
     this.urlStore[shortUrl] = { originalUrl, statistics };
     return shortUrl;
   }
  
  getOne(shortUrl) {
    if (!this.urlStore[shortUrl]) return null;

    this.urlStore[shortUrl].statistics.visited += 1;
    return this.urlStore[shortUrl].originalUrl;
  }

  getStatistics(shortUrl){
    return this.urlStore[shortUrl].statistics;
  }

  
}

module.exports = UrlRepo;