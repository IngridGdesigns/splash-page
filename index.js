// const btn = document.getElementById("btn-form");
const btnRefresh = document.getElementById("btn-modal")
const form = document.getElementById("py-form");
let modal = document.getElementById("modal");

form.addEventListener("submit", function(e){
    e.preventDefault();
    modal.style.display = "flex";
    form.reset();
})

btnRefresh.addEventListener("click", function(){
    modal.style.display = "none";
    
})