# JSConf.co Archive

This repo hosts all the previous versions of JSConf.co.

## Setup

Simply run `npm i`

## Server

You can run `npm start` or use any static server.

## Update

To create a new edition you can update the `scraper.js` file to download
the actual version and store it in the desired directory. This file is
updated to use for the 2017 edition.

Then run `node scraper` and you should see a new directory.

## Deployment

The deployment is being made manualy in the meanwhile to a S3 bucket.

## Author

[@davsket](https://github.com/davsket)