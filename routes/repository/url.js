class UrlRepo{
 urlStore = {};
  
   saveOne(originalUrl,shortUrl,statistics) {
     this.urlStore[shortUrl] = { originalUrl, statistics };
     return shortUrl;
   }
  
  getOne(shortUrl) {
    return this.urlStore[shortUrl].originalUrl;
  }

  getStatistics(shortUrl){
    return this.urlStore[shortUrl].statistics;
  }

}