addEventListener("scroll",(event) => {
    if (scrollY >= 527){
    document.querySelector(".navbar").classList.add("changeColor");
    }
    else{
        document.querySelector(".navbar").classList.remove("changeColor");
    }
})