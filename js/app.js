// put in commas
// don't reuse words

function generateText(){
  var numParagraphs = document.getElementById("numParagraphs").value;
  numParagraphs = Number(numParagraphs);

  if(isNaN(numParagraphs) || numParagraphs === 0)
    numParagraphs = 1;
  
  if(numParagraphs > 10)
    numParagraphs = 20;

  var newText = makeParagraphs(numParagraphs);
  document.getElementById("finText").innerHTML = newText;
}

function randNum(min, max){
  if(max === undefined){
    var rand = Math.floor(Math.random()*min);
    return rand < 1 ? 1: rand;
  }
    return rand = Math.floor(Math.random()*(max - min) + min);
}

function makeSentence(words,numWords){
  var sentenceLength = randNum(3,numWords);
  var sentence = "";
  for( var i = 0; i < sentenceLength; i++){
    sentence += " " + words[randNum(words.length)];
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
  var output = "";
  for(var i = 0; i < number; i ++){
    output += "<p>\n";
    output += makeParagraph(randNum(2,8)) + "\n";
    output += "</p>\n";
  }
  return output;
}