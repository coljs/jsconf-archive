var scrape = require('website-scraper')
var options = {
  urls: ['http://2017.jsconf.co/'],
  directory: './2017/',
}

// with callback
scrape(options, function (error, result) {
  console.log(result)
})
