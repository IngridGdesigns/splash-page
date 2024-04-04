const btn = document.getElementById("btn-form");
const btnRefresh = document.getElementById("btn-modal")


let modal = document.getElementById("modal");

btn.addEventListener("click", function(e){
    e.preventDefault();
    modal.style.display = "flex";
})

btnRefresh.addEventListener("click", function(){
    modal.style.display = "none";
    document.getElementById("py-form").reset();
})