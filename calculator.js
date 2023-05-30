function calculator (){
  let operand = document.querySelector("#operand-7").innerText
  let display = document.getElementById("display")
  display.innerText += operand
}

let input7 = document.getElementById("operand-7")
input7.addEventListener("click", calculator)

function calculato (){
  let operand = document.querySelector("#operand-8").innerText
  let display = document.getElementById("display")
  display.innerText += operand
}

let input8 = document.getElementById("operand-8")
input8.addEventListener("click", calculato)

function calculat (){
  let operand = document.querySelector("#operand-9").innerText
  let display = document.getElementById("display")
  display.innerText += operand
}

let input9 = document.getElementById("operand-9")
input9.addEventListener("click", calculat)

function calcula (){
  let operand = document.querySelector("#operand-4").innerText
  let display = document.getElementById("display")
  display.innerText += operand
}

let input4 = document.getElementById("operand-4")
input4.addEventListener("click", calcula)

function calcul (){
  let operand = document.querySelector("#operand-5").innerText
  let display = document.getElementById("display")
  display.innerText += operand
}

let input5 = document.getElementById("operand-5")
input5.addEventListener("click", calcul)

function calcu (){
  let operand = document.querySelector("#operand-6").innerText
  let display = document.getElementById("display")
  display.innerText += operand
}

let input6 = document.getElementById("operand-6")
input6.addEventListener("click", calcu)

function calc (){
  let operand = document.querySelector("#operand-3").innerText
  let display = document.getElementById("display")
  display.innerText += operand
}

let input3 = document.getElementById("operand-3")
input3.addEventListener("click", calc)

function cal (){
  let operand = document.querySelector("#operand-2").innerText
  let display = document.getElementById("display")
  display.innerText += operand
}

let input2 = document.getElementById("operand-2")
input2.addEventListener("click", cal)

function ca (){
  let operand = document.querySelector("#operand-1").innerText
  let display = document.getElementById("display")
  display.innerText += operand
}

let input1= document.getElementById("operand-1")
input1.addEventListener("click", ca)

function dot (){
  let operand = document.querySelector("#operand").innerText
  let display = document.getElementById("display")
  display.innerText += operand
}

let input= document.getElementById("operand")
input.addEventListener("click", dot)

function zero (){
  let operand = document.querySelector("#operand-0").innerText
  let display = document.getElementById("display")
  display.innerText += operand
}

let input0= document.getElementById("operand-0")
input0.addEventListener("click", zero)

function zeros (){
  let operand = document.querySelector("#operand-00").innerText
  let display = document.getElementById("display")
  display.innerText += operand
}

let input00 = document.getElementById("operand-00")
input00.addEventListener("click", zeros)

function bracket (){
  let bracket = document.getElementById("bracket").innerText
  let display = document.getElementById("display")
  display.innerText += bracket
}
let brack = document.getElementById("bracket")
 brack.addEventListener("click", bracket)

function operation (){
  let operator = document.querySelector("#operator-1").innerText
  let display = document.getElementById("display")
  display.innerText += operator
}

let operator = document.getElementById("operator-1")
operator.addEventListener("click", operation)

function operatio (){
  let operator = document.querySelector("#operator-2").innerText
  let display = document.getElementById("display")
  display.innerText += operator
}

let operator2 = document.getElementById("operator-2")
operator2.addEventListener("click", operatio)

function operati (){
  let operator = document.querySelector("#operator-3").innerText
  let display = document.getElementById("display")
  display.innerText += operator
}

let operator3 = document.getElementById("operator-3")
operator3.addEventListener("click", operati)

function operat (){
  let operator = document.querySelector("#operator-4").innerText
  let display = document.getElementById("display")
  display.innerText += operator
}

let operator4 = document.getElementById("operator-4")
operator4.addEventListener("click", operat)

function opera (){
  let operator = document.querySelector("#operator-5").innerText
  let display = document.getElementById("display")
  display.innerText += operator
}

let operator5 = document.getElementById("operator-5")
operator5.addEventListener("click", opera)

document.getElementById("equal").addEventListener("click", () => {
  let display = document.getElementById("display").innerHTML;

  if(display){
    document.getElementById("display").innerHTML = eval(display);
  }
})

document.getElementById("delete").addEventListener("click", () => {
  let display = document.getElementById("display").innerHTML;

  if(display){
    document.getElementById("display").innerHTML = display.slice(0,-1);
  }
})

document.getElementById("clear").addEventListener("click", () => {
  let display = document.getElementById("display").innerHTML;

  if(display){
    document.getElementById("display").innerHTML = display = " "
  }
})



