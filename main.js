 
  function increase (){

    let button = this;
    let countContainer = button.closest(".part");
    let counter = countContainer.querySelector(".counter").textContent;
    let total = parseInt(document.querySelector(".total").textContent);
    total += 1 ;
    let to =total.toString();
    
    let count1 = parseInt(counter);
    count1 += 1 ;
    let st =count1.toString();
    countContainer.querySelector(".counter").textContent = st;
    document.querySelector(".total").textContent = to;
    
 }

 function reset (){
let all = document.querySelectorAll(".part span");
let total = document.querySelector(".total");

for (let i = 0; i < all.length; i++) {
    all[i].textContent = 0;
}

total.textContent = 0;

 }