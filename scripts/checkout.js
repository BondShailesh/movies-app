// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let k = JSON.parse(localStorage.getItem("movie"));
  
let div0 = document.createElement("div");

let img = document.createElement("img");
img.src =   k.Poster;

let h3 = document.createElement("h3");
h3.innerText = k.Title
div0.append(img,h3);

document.querySelector("#movie").append(div0);

// appending Done


let amount = JSON.parse(localStorage.getItem("amount"));
amount = Number(amount);
document.querySelector("#confirm").addEventListener("click",funconfirm);

function funconfirm(){
let number_of_seats = document.querySelector("#number_of_seats").value;
console.log();
let finalamount = 100*(Number(number_of_seats));

if(amount>=finalamount){
let amount0 = amount-finalamount
let finaldeduct = localStorage.setItem("amount",JSON.stringify(amount0));
document.querySelector("#wallet").innerText = amount0;
alert("Booking Successful!");
window.location.reload();
}else{
  alert("Insufficient Balance !");
}

}


    // let m = JSON.parse(localStorage.getItem("amount"));
    // let h1tag = document.querySelector("#wallet")
    // h1tag.innerText = m;
//   let sum = 0;
//     let km = JSON.parse(localStorage.getItem("amount"));
//  for(let i=0; i<km.length; i++){
//    sum = sum+Number(km[i])
//  }
//    console.log(sum);
//     let h1tag = document.querySelector("#wallet")
//     h1tag.innerText = sum;
let kk = JSON.parse(localStorage.getItem("amount"));
    let h1tag = document.querySelector("#wallet")
    h1tag.innerText = kk;