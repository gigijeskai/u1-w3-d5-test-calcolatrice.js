function addOnDisplay(stringa){
  return document.getElementById("display").value += stringa
}

function showResult(){
let result = eval(document.getElementById('display').value)
return document.getElementById('display').value = result
}

function deleteDisplay(){
document.getElementById("display").value = null
}