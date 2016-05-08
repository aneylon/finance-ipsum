// console.log("test");
var words = [
  "diversify",
  "funds",
  "stocks",
  "bonds",
  "401k",
  "rollover",
  "IRA"
];

function generateText(){
  var numParagraphs = document.getElementById("numParagraphs").value;
  numParagraphs = Number(numParagraphs);

  if(isNaN(numParagraphs) || numParagraphs === 0)
    numParagraphs = 1;
  
  if(numParagraphs > 10)
    numParagraphs = 10;

  var newText = "";

  for(var i = 0; i < numParagraphs; i++){
    newText += i + " paragraph.<br>\n";
  }


  document.getElementById("finText").innerHTML = newText;
}

// words in sentence
// sentences in paragraph
// pagagraphs