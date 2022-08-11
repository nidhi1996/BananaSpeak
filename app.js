var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output p");
btnTranslate.addEventListener("click", function clickeventhandler(){
    txtOutput.innerHTML= txtInput.value;
    
});