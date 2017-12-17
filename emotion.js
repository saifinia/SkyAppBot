var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username': 'd8a3985c-4c01-4fd9-8abe-feca656b66e9',
  'password': 'NCLAYuJdktp4',
  'version_date': '2017-02-27'
});
var MsTranslator = require('mstranslator');
// Second parameter to constructor (true) indicates that 
// the token should be auto-generated. 
 
var client = new MsTranslator({
  api_key: '76578759ef2648adb3038a9578043084'
}, true);

var params1 = {
  text: '数学真是很有趣啊。'
  , from: 'zh-CHS'
  , to: 'en'
};

var params5 = {
  text: '数学很好玩啊。我很喜欢数学。'
  , from: 'zh-CHS'
  , to: 'en'
};
var params2 = {
  text: '数学能很好地提高我在班级的排名，我很喜欢数学。'
  , from: 'zh-CHS'
  , to: 'en'
};
var params3 = {
  text: '我发现做完这些习题我能提高很多呢，很满足。'
  , from: 'zh-CHS'
  , to: 'en'
};
var params4 = {
  text: '随着认真完成老师的练习，我进步越来越大了。'
  , from: 'zh-CHS'
  , to: 'en'
};

 
// be auto-generated access token if needed. 
client.translate(params1, function(err, data) {
  var parameters1 = {
  'text': data,
    'features': {
    'emotion': {}
  }
};
natural_language_understanding.analyze(parameters1, function(err, response) {
  if (err)
    console.log('error:', err);
  else{
var sadness=response.emotion.document.emotion.sadness
var angry=response.emotion.document.emotion.angry
var fear=response.emotion.document.emotion.fear
var disgust=response.emotion.document.emotion.disgust;
var joy=response.emotion.document.emotion.joy;
console.log('sadness1'+sadness);
console.log('angry1'+angry);
console.log('fear1'+fear);
console.log('disgust1'+disgust);
}
});
});

client.translate(params2, function(err, data) {
  var parameters2 = {
  'text': data,
    'features': {
    'emotion': {}
  }
};
natural_language_understanding.analyze(parameters2, function(err, response) {
  if (err)
    console.log('error:', err);
  else{
var sadness=response.emotion.document.emotion.sadness
var angry=response.emotion.document.emotion.angry
var fear=response.emotion.document.emotion.fear
var disgust=response.emotion.document.emotion.disgust;
var joy=response.emotion.document.emotion.joy;
console.log('sadness2'+sadness);
console.log('angry2'+angry);
console.log('fear2'+fear);
console.log('disgust2'+disgust);
}
});
});
client.translate(params3, function(err, data) {
  var parameters3 = {
  'text': data,
    'features': {
    'emotion': {}
  }
};
natural_language_understanding.analyze(parameters3, function(err, response) {
  if (err)
    console.log('error:', err);
  else{
var sadness=response.emotion.document.emotion.sadness
var angry=response.emotion.document.emotion.angry
var fear=response.emotion.document.emotion.fear
var disgust=response.emotion.document.emotion.disgust;
var joy=response.emotion.document.emotion.joy;
console.log('sadness31'+sadness);
console.log('angry31'+angry);
console.log('fear31'+fear);
console.log('disgust31'+disgust);
}
});
});


client.translate(params4, function(err, data) {
  var parameters4 = {
  'text': data,
    'features': {
    'emotion': {}
  }
};
natural_language_understanding.analyze(parameters4, function(err, response) {
  if (err)
    console.log('error:', err);
  else{
var sadness=response.emotion.document.emotion.sadness
var angry=response.emotion.document.emotion.angry
var fear=response.emotion.document.emotion.fear
var disgust=response.emotion.document.emotion.disgust;
var joy=response.emotion.document.emotion.joy;
console.log('sadness14'+sadness);
console.log('angry14'+angry);
console.log('fear14'+fear);
console.log('disgust14'+disgust);
}
});
});
client.translate(params5, function(err, data) {
  var parameters5 = {
  'text': data,
    'features': {
    'emotion': {}
  }
};
natural_language_understanding.analyze(parameters5, function(err, response) {
  if (err)
    console.log('error:', err);
  else{
var sadness=response.emotion.document.emotion.sadness
var angry=response.emotion.document.emotion.angry
var fear=response.emotion.document.emotion.fear
var disgust=response.emotion.document.emotion.disgust;
var joy=response.emotion.document.emotion.joy;
console.log('sadness51'+sadness);
console.log('angry51'+angry);
console.log('fear51'+fear);
console.log('disgust51'+disgust);
}
});
});

