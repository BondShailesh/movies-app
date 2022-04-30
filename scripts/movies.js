// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
 // let sum = 0;
 let k = JSON.parse(localStorage.getItem("amount"));
 let h1tag = document.querySelector("#wallet")
 h1tag.innerText = k;

//    let k = JSON.parse(localStorage.getItem("amount"));
//  for(let i=0; i<k.length; i++){
//    sum = sum+Number(k[i])
//  }
//  console.log(sum);
//   let h1tag = document.querySelector("#wallet")
//   h1tag.innerText = sum;



 // debouncing
let id;
async function searchMovies(){ 
let input = document.querySelector("#search").value
let res =await fetch(`http://www.omdbapi.com/?apikey=1af470c3&s=${input}`);
let data = await res.json();
let finaldata = data.Search
// console.log(data.Search);
// append(data.Search)
return finaldata;
}
// searchMovies()
function append(data){

data.map(function(el){
let div0 = document.createElement("div");

let img = document.createElement("img");
img.src =   el.Poster;

let h3 = document.createElement("h3");
h3.innerText = el.Title

let button = document.createElement("button");
button.innerText = "book now";
button.setAttribute("class","book_now")
button.addEventListener("click",function(){
checkoutFun(el,button);
})

div0.append(img,h3,button);
document.querySelector("#movies").append(div0);

})

}

async function main(){
let data = await searchMovies();
if(data==undefined){
return false;
}
append(data);
console.log(data);
}

function debounce(func,delay){
if(id){
clearTimeout(id);
}
id = setTimeout(function(){
 func()
},delay);

}

// debouncing done
function checkoutFun(el,button){
localStorage.setItem("movie",JSON.stringify(el));
window.location.href = "checkout.html"
console.log(el);
}