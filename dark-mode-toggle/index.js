let bac=document.querySelector(".btn");

bac.addEventListener("click", function(){
    if (!document.body.style.background){
        document.body.style.background = "#222f3e";
        document.body.style.color = "#ffffff";
    }else {
        document.body.style.background = '';
        document.body.style.color = "#000000";
    }
});
