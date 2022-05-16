let clicks = document.querySelectorAll(".btn");

document.addEventListener("DOMContentLoaded",function(){
    if(localStorage.getItem("book") !== null){
        cartCount();
    }
})

let books = [];

clicks.forEach((button)=>{
    button.addEventListener("click",function(e){
        e.preventDefault();
        if(localStorage.getItem("book") !== null){
            book = JSON.parse(localStorage.getItem("book"));
        }
       let name = this.parentNode.querySelector("h5").innerText;
       let img = this.parentNode.previousElementSibling.src;
       let price = this.parentNode.querySelector("strong").innerText;
       let id = this.getAttribute("data-id");
       let existedBook = books.find((x) => x.id == id);

       if(existedBook !== undefined){
           existedBook.count++;
       }
       else{
        let book = {
            id,
            img,
            name,
            price,
            count : 1,
          }
           books.push(book);
       }
       localStorage.setItem("book",JSON.stringify(books));
       cartCount();
       Plus();
    })
})

function cartCount(){
    let book = JSON.parse(localStorage.getItem("book"));
    let count = book.reduce((t,val) => {
        return(t += val.count);
    },0)
    let countVal = document.querySelector("sup");
    countVal.innerText = count;
}



