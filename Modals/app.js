let btn=document.querySelector(".button");
let modal=document.querySelector(".modal_wrapper");
let closeBtn=document.querySelector(".close_btn");

btn.addEventListener("click",function(){
    modal.style.display="block";
})

closeBtn.addEventListener("click",function(){
    modal.style.display="none";
})


window.addEventListener("click",function(e){
    if(e.target==modal){
        modal.style.display="none";
    }
})