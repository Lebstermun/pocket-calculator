let answer = "";
let good = "";
let standby = "";
let temp = "";
let count = 0

function number(num) {
  if(document.getElementById("output").innerHTML == "+" || document.getElementById("output").innerHTML == "-" || document.getElementById("output").innerHTML == "*" || document.getElementById("output").innerHTML == "/"){
    good += document.getElementById("output").innerHTML
    document.getElementById("output").innerHTML = ""
}  if (document.getElementById("output").innerHTML == "0"){
    document.getElementById("output").innerHTML = ""
  }
  if (document.getElementById("output").innerHTML == answer){
    document.getElementById("output").innerHTML = ""
  }
  if (standby.length > 8){
  }else {
      standby = standby + num
      temp = document.getElementById("output").innerHTML + num
      document.getElementById("output").innerHTML = temp.toLocaleString();
      if (document.getElementById("output").innerHTML == "-" + standby){
      }else {
        standby = document.getElementById("output").innerHTML
    }
  }
}
function allClearButton(){
  document.getElementById("output").innerHTML = "0"
  answer = ""
  good = ""
  standby = ""
}
function equalsButton(){
  if (document.getElementById("output").innerHTML == "+" || document.getElementById("output").innerHTML == "-" || document.getElementById("output").innerHTML == "*" || document.getElementById("output").innerHTML == "/"){
  }else{
  good += standby
  standby = ""
  answer = eval(good)
  document.getElementById("output").innerHTML = answer.toLocaleString();
  if (answer == "Infinity"){
    document.getElementById("output").innerHTML = "Error INFINITY"
  } else if (answer >= 1000000000) {
    let exponent = answer.toString().length-1;
    document.getElementById('output').innerHTML = answer / (10 ** (exponent)) + 'e' + exponent;

    }
}
}

function negationButton() {
  if (document.getElementById("output").innerHTML == "-" + standby){
    document.getElementById("output").innerHTML = standby
  }else if (document.getElementById("output").innerHTML.indexOf("-") == 0 && document.getElementById("output").innerHTML != "-" + answer) {
    document.getElementById("output").innerHTML = standby
  } else if (document.getElementById("output").innerHTML == answer){
    document.getElementById("output").innerHTML = "-" + answer
  } else if (document.getElementById("output").innerHTML == "-" + answer){
    document.getElementById("output").innerHTML = answer
  }else{
    document.getElementById("output").innerHTML = "-" + standby
  }
console.log()
}
function plusButton() {
  if(document.getElementById("output").innerHTML == "+" || document.getElementById("output").innerHTML == "-" || document.getElementById("output").innerHTML == "*" || document.getElementById("output").innerHTML == "/"){
  document.getElementById("output").innerHTML = "+"
} else if (standby = ""){
} else if (document.getElementById("output").innerHTML == answer.toLocaleString()){
  good = answer
  document.getElementById("output").innerHTML = "+"
}else {
    good += document.getElementById("output").innerHTML
  standby = ""
  document.getElementById("output").innerHTML = "+"
}
}

function minusButton() {
  if(document.getElementById("output").innerHTML == "+" || document.getElementById("output").innerHTML == "-" || document.getElementById("output").innerHTML == "*" || document.getElementById("output").innerHTML == "/"){
  document.getElementById("output").innerHTML = "-"
} else if (standby = ""){
} else if (document.getElementById("output").innerHTML == answer.toLocaleString()){
  good = answer
  document.getElementById("output").innerHTML = "-"
}else {
  good += document.getElementById("output").innerHTML
  standby = ""
  document.getElementById("output").innerHTML = "-"
}
}

function multiplyButton() {
  if(document.getElementById("output").innerHTML == "+" || document.getElementById("output").innerHTML == "-" || document.getElementById("output").innerHTML == "*" || document.getElementById("output").innerHTML == "/"){
  document.getElementById("output").innerHTML = "*"
} else if (standby = ""){
} else if (document.getElementById("output").innerHTML == answer.toLocaleString()){
  good = answer
  document.getElementById("output").innerHTML = "*"
} else {
  good += document.getElementById("output").innerHTML
  standby = ""
  document.getElementById("output").innerHTML = "*"
}
}

function divideButton() {
  if(document.getElementById("output").innerHTML == "+" || document.getElementById("output").innerHTML == "-" || document.getElementById("output").innerHTML == "*" || document.getElementById("output").innerHTML == "/"){
  document.getElementById("output").innerHTML = "/"
} else if (standby = ""){
} else if (document.getElementById("output").innerHTML == answer.toLocaleString()){
  good = answer
  document.getElementById("output").innerHTML = "/"
} else {
  good += document.getElementById("output").innerHTML
  standby = ""
  document.getElementById("output").innerHTML = "/"
}
}
function percentButton() {
  if (document.getElementById("output").innerHTML.indexOf("-") == 0) {
    standby = eval(standby * 0.01).toFixed(7)
    document.getElementById("output").innerHTML = "-" + standby
  } else {
    standby = eval(standby * 0.01).toFixed(7)
    document.getElementById("output").innerHTML = standby
}
}
