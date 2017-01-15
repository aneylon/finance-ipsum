function keyDown(event){
  if( event.which === 13 ) {
    generateText()
  }
}

function generateText(){
  var numParagraphs = document.getElementById("numParagraphs").value
  numParagraphs = Number(numParagraphs)

  var xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
      document.getElementById("finText").innerHTML = this.responseText
      document.getElementById("numParagraphs").value = ""
    }
  }
  xhttp.open('GET', '/ipsum/' + numParagraphs, true)
  xhttp.send()
}
