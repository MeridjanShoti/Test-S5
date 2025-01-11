addEventListener("scroll",(event) => {
    if (scrollY >= 348.73){
    document.querySelector(".navbar").classList.add("changeColor");
    }
    else{
        document.querySelector(".navbar").classList.remove("changeColor");
    }
})

let svg = document.querySelector('svg');
let qualcosaltro = Array.from(svg.querySelectorAll('g[opacity]'))

/* console.log(qualcosaltro)
qualcosaltro.forEach(a=>{
    a.setAttribute('opacity', 0)
    console.log(a)
    
}) */
function randomOpacity(){
    let index = Math.floor(Math.random()*qualcosaltro.length)
    let gruppo = qualcosaltro[index]

    gruppo.setAttribute('opacity', 0)
    setInterval(()=>{
        gruppo.setAttribute('opacity', 1)
    }, 100)    
}
setInterval(randomOpacity, 100)