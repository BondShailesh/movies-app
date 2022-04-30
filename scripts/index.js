var sum = 0; 
let moneyarr = [] 
if(moneyarr ==null){ 
moneyarr = [];
}else{
moneyarr = [JSON.parse(localStorage.getItem("amount"))]
}
// console.log(moneyarr);

document.querySelector("#wallet").innerText = 0;

document.querySelector("#add_to_wallet").addEventListener("click",funAmout);
function funAmout(){
let input0 = document.querySelector("#amount").value;
moneyarr.push(input0);
for(let i=0; i<moneyarr.length;i++){
sum = sum + Number(moneyarr[i])
}
console.log(moneyarr);
// console.log(input0);
localStorage.setItem("amount",JSON.stringify(sum));
// console.log();
window.location.reload()
}

let k = JSON.parse(localStorage.getItem("amount"));
let h1tag = document.querySelector("#wallet")
h1tag.innerText = k;
//    let k = JSON.parse(localStorage.getItem("amount"));
//  for(let i=0; i<k.length; i++){
//    sum = sum+k[i]
//  }
//  console.log(sum);
//   let h1tag = document.querySelector("#wallet")
//   h1tag.innerText = sum;


document.querySelector("#book_movies").addEventListener("click",funGoToMovies)
function funGoToMovies(){
window.location.href = "movies.html";
}

