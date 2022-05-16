let plus = document.querySelector(".plus");
let nameData = document.querySelector("h5");
let priceData = document.getElementById(".price");


plus.addEventListener("click",function(){
    let name = nameData.innerText;
    let price = priceData.innerText
    

    console.log(name);
    console.log(price);
})