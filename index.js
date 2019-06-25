const scrape = require('website-scraper');

const websiteUrl = 'https://invena.co';

let options = {
    urls: [websiteUrl],
    directory: './invena',
    recursive: true,
    maxRecursiveDepth: 10,
    //filenameGenerator: 'bySiteStructure'
};

scrape(options).then(() => {
    console.log("Webpages succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});