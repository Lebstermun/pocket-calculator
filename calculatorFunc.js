let answer = "";
let good = "";
let standby = "";
let temp = "";
let count = 0

function number(num) {
  if(document.getElementById("output").innerHTML == "+" || document.getElementById("output").innerHTML == "-" || document.getElementById("output").innerHTML == "*" || document.getElementById("output").innerHTML == "/"){
    good += document.getElementById("output").innerHTML
    document.getElementById("output").innerHTML = ""
}  if (document.getElementById("output").innerHTML == ""){
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
  document.form.textview.value = ""
  answer = ""
  good = ""
  standby = ""
}
function equals(){
  if (document.getElementById("output").innerHTML == "+" || document.getElementById("output").innerHTML == "-" || document.getElementById("output").innerHTML == "*" || document.getElementById("output").innerHTML == "/"){
  }else{
  good += standby
  standby = ""
  answer = eval(good)
  document.getElementById("output").innerHTML = answer.toLocaleString();
  if (answer == "Infinity"){
    document.getElementById("output").innerHTML = "Error INFINITY"
    document.body.style.backgroundImage = "url('https://media1.tenor.com/images/589b49d44d8c83f984a5f0a21a749e13/tenor.gif?itemid=4104435')";
  } else if (answer >= 1000000000) {
    let exponent = answer.toString().length-1;
    document.getElementById('output').innerHTML = answer / (10 ** (exponent)) + 'e' + exponent;

    }
}
}

function negate() {
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
function addition() {
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

function subtraction() {
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

function multiplication() {
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

function division() {
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
