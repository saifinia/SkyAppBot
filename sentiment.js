// Imports the Google Cloud client library
const Language = require('@google-cloud/language');

// Instantiates a client
const language = Language();

const text1="这个练习题很简单，我觉得我没必要做啊。";
const text2="这个看起来很快就做完啦。";
const text3="哎呀，才刚上手，这个好简单啊。";
const text4="哇，这个太容易了。";
const text5="我发现数学蛮有趣的哎";
const text6="才刚学质因数分解，我发现它很好玩啊。";
const text7="这些题目太简单啦，我随随便便就做对了。";
const text8="嘿嘿，虽然第一次做，但我做这套题分数可高了！";
const text9="都不用怎么算就全对了，我简直是天才！";
const text10="我第一次学分解质因数呢，真没想到居然能拿满分。";

// Detects the sentiment of the document
const document1 = {
  content: text1,
  type: 'PLAIN_TEXT',
};
const document2 = {
  content: text2,
  type: 'PLAIN_TEXT',
};

const document3 = {
  content: text3,
  type: 'PLAIN_TEXT',
};

const document4 = {
  content: text4,
  type: 'PLAIN_TEXT',
};

const document5 = {
  content: text5,
  type: 'PLAIN_TEXT',
};

const document6= {
  content: text6,
  type: 'PLAIN_TEXT',
};

const document7= {
  content: text7,
  type: 'PLAIN_TEXT',
};

const document8 = {
  content: text8,
  type: 'PLAIN_TEXT',
};

const document9 = {
  content: text9,
  type: 'PLAIN_TEXT',
};

const document10 = {
  content: text10,
  type: 'PLAIN_TEXT',
};


// Detects the sentiment of the text
language.analyzeSentiment({ document: document1 })
  	.then((results) => {
    	const sentiment = results[0].documentSentiment;
    	console.log("1"+sentiment.magnitude);
    	console.log("1"+sentiment.score);
 	 });
language.analyzeSentiment({ document: document2 })
  	.then((results) => {
    	const sentiment = results[0].documentSentiment;
    	console.log("2"+sentiment.magnitude);
    	console.log("2"+sentiment.score);
 	 });
 	language.analyzeSentiment({ document: document3 })
  	.then((results) => {
    	const sentiment = results[0].documentSentiment;
    	console.log("3"+sentiment.magnitude);
    	console.log("3"+sentiment.score);
 	 });
 	 language.analyzeSentiment({ document: document4 })
  	.then((results) => {
    	const sentiment = results[0].documentSentiment;
    	console.log("4"+sentiment.magnitude);
    	console.log("4"+sentiment.score);
 	 });
 	 language.analyzeSentiment({ document: document5 })
  	.then((results) => {
    	const sentiment = results[0].documentSentiment;
    	console.log("5"+sentiment.magnitude);
    	console.log("5"+sentiment.score);
 	 });
 	 language.analyzeSentiment({ document: document6 })
  	.then((results) => {
    	const sentiment = results[0].documentSentiment;
    	console.log("6"+sentiment.magnitude);
    	console.log("6"+sentiment.score);
 	 });
 	 language.analyzeSentiment({ document: document7 })
  	.then((results) => {
    	const sentiment = results[0].documentSentiment;
    	console.log("7"+sentiment.magnitude);
    	console.log("7"+sentiment.score);
 	 });
 	 language.analyzeSentiment({ document: document8 })
  	.then((results) => {
    	const sentiment = results[0].documentSentiment;
    	console.log("8"+sentiment.magnitude);
    	console.log("8"+sentiment.score);
 	 });
 	 language.analyzeSentiment({ document: document9 })
  	.then((results) => {
    	const sentiment = results[0].documentSentiment;
    	console.log("9"+sentiment.magnitude);
    	console.log("9"+sentiment.score);
 	 });
 	 language.analyzeSentiment({ document: document10 })
  	.then((results) => {
    	const sentiment = results[0].documentSentiment;
    	console.log("10"+sentiment.magnitude);
    	console.log("10"+sentiment.score);
 	 });