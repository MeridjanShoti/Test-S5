addEventListener("scroll",(event) => {
    if (scrollY >= 527){
    document.querySelector(".navbar").classList.add("changeColor");
    }
    else{
        document.querySelector(".navbar").classList.remove("changeColor");
    }
})

let m = document.querySelectorAll('g[transform^="matrix"]')
console.log(m)
setInterval(function (){
let i = 0;
if (m[i].opacity === 0){
m[i].opacity = 1}
else{
    m[i].opacity = 0
}
i++
}, 1000)