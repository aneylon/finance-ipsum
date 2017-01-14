// make bg image
// submit with 'enter' in text field.

// input validation
  // do not allow non number characters in text field

// put in commas for longer sentences
// initial tab at beginning of paragraph
// better sentence construction

// google adsense ?
// url = ~ $15.00

function keyDown(event){
  if( event.which === 13 ) {
    generateText();
  }
}

function generateText(){
  var numParagraphs = document.getElementById("numParagraphs").value;
  numParagraphs = Number(numParagraphs);

  if(isNaN(numParagraphs) || numParagraphs === 0)
    numParagraphs = 1;
  
  if(numParagraphs > 10)
    numParagraphs = 10

  var newText = makeParagraphs(numParagraphs);
  document.getElementById("finText").innerHTML = newText;
  document.getElementById("numParagraphs").value = "";
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
  var output = "";
  for(var i = 0; i < number; i ++){
    output += "<p>\n";
    output += makeParagraph(randNum(2,8)) + "\n";
    output += "</p>\n";
  }
  return output;
}