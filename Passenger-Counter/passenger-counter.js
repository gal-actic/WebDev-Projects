let count = 0
let saveE1 = document.getElementById("save-el")
let countE1 = document.getElementById("count-el")
//camelcase and cant put dash in var name
//DOM - how use javascript to modify website

function increment(){
    count += 1
    countE1.innerText = count
}

function save(){
    let countStr = count +"-"
    saveE1.textContenttStr
    countE1.textContent=0
    count =0
}

console.log("Let's count people on the Subway!!")
//strings vs numbers