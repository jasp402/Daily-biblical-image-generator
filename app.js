const puppeteer = require('puppeteer');
const fetch     = require('node-fetch');
const fs        = require('fs');

const optionsLaunch = {
	timeout        : 999 * 1000,
	headless       : false,
	defaultViewport: null
};
const optionGoTo = {
	waitUntil: 'networkidle0',
	timeout  : 0
};
const urlPage = 'https://www.bible.com/es/verse-of-the-day';
const urlImage = code => `https://imageproxy.youversionapi.com/1280x1280/https://s3.amazonaws.com/static-youversionapi-com/images/base/${code}/1280x1280.jpg`

function currentDate(){
	let date       = new Date();
	let dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split("T")[0];
	return dateString.split('-').reverse().join('-');
}
async function download(code) {
	const response = await fetch(urlImage(code));
	const buffer   = await response.buffer();
	fs.writeFileSync(`${__dirname}/assets/${currentDate()}_${code}.jpg`, buffer);
}

(async () =>
{
	const browser = await puppeteer.launch(optionsLaunch);
	const page    = await browser.newPage();
	
	await page.setDefaultNavigationTimeout(0);
	await page.goto(urlPage,optionGoTo);
	
	await page.waitForSelector('div.i-amphtml-slide-item a');
	
	let result = await page.evaluate(() =>
		Array
			.from(document.querySelectorAll('div.i-amphtml-slide-item a'))
			.map(a => a.getAttribute('href').trim())
			.pop()
			.split('/')
			.filter(part => part.indexOf('?') > -1)[0]
			.split('?')[0]
	);
	download(result);
	console.log(`${__dirname}\\assets\\${currentDate()}_${result}.jpg`);
	await browser.close();
})();