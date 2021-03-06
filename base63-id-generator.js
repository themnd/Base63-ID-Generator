
currentID = ['0'];

inputElement = document.getElementById("current-id-input");
generateIdBtnElement = document.getElementById("generate-next-id-btn");



function readInputAndSetCurrentValue(){
  setCurrentID(inputElement.getAttribute("value"));
}

function getCurrentID() {
  var temp = '';
  for(var k=0; k<currentID.length; k++){
    temp += currentID[k];
  }
  return temp;
}

function setCurrentID(id) {
  currentID = id.split("");
}

function getNextID() {
  readInputAndSetCurrentValue();
  incrementIDChar(currentID.length-1);
  inputElement.setAttribute("value",getCurrentID());
}

function incrementIDChar(i) {
  if(i<0){
    for(l=0; l<currentID.length; l++){
      currentID[l] = '0';
    }
    currentID.push('0');
    return;
  }else{
    var lastChar = currentID[i];
    var lastCharCode = lastChar.charCodeAt(0);
    lastCharCode++;

    var overflow = false;

    if(lastCharCode == 58){
      lastCharCode = 65;
    }
    else if (lastCharCode == 91) {
      lastCharCode = 95;
    }
    else if (lastCharCode == 96) {
      lastCharCode = 97;
    }
    else if (lastCharCode == 123) {
      lastCharCode = 48;
      overflow = true;
    }

    lastChar = String.fromCharCode(lastCharCode);
    currentID[i] = lastChar;

    if(overflow){
      var index = --i;
      incrementIDChar(index);
    }
  }
}
