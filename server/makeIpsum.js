const finWords = require('./finWords')

function randNum(min, max){
  if(max === undefined){
    var rand = Math.floor(Math.random()*min);
    return rand < 1 ? 1: rand;
  }
    return rand = Math.floor(Math.random()*(max - min) + min);
}

function makeSentence(words,numWords){
  var sentenceLength = randNum(3,numWords);
  var tempWords = words.slice();
  var sentence = "";
  for( var i = 0; i < sentenceLength; i++){
    var rand = randNum(tempWords.length);
    if(i === 0) {
      var word = tempWords[rand];
      var tmp = "";
      for(var k = 0; k < word.length; k++){
        if(k === 0) {
          tmp += word[k].toUpperCase();
        } else {
          tmp += word[k];
        }
      }
      sentence += " " + tmp;
    } else {
      sentence += " " + tempWords[rand];
    }
    tempWords.splice(rand,1);
  }
  return sentence + ".";
}

function makeParagraph(numSen){
  var output = "";
  var numWords = randNum(numSen);
  for(var i = 0; i < numSen; i++){
    output += makeSentence(finWords,15);
  }
  return output;
}

function makeParagraphs(number){

  if(isNaN(number) || number === 0)
    number = 1

  if(number > 10)
    number = 10

  var output = "";
  for(var i = 0; i < number; i ++){
    output += "<p>\n";
    output += makeParagraph(randNum(2,8)) + "\n";
    output += "</p>\n";
  }
  return output;
}


module.exports = function(num){
  return makeParagraphs(num)
}
