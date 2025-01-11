addEventListener("scroll",(event) => {
    if (scrollY >= 348.73){
    document.querySelector(".navbar").classList.add("changeColor");
    }
    else{
        document.querySelector(".navbar").classList.remove("changeColor");
    }
})

let svg = document.querySelector('svg');

//seleziono tutti gli elementi g che hanno l'attributo opacity

let arrayGroup = [...svg.querySelectorAll('g[opacity]')]

function randomOpacity(){
    let index = Math.floor(Math.random()*arrayGroup.length)
    let gruppo = arrayGroup[index]

    gruppo.setAttribute('opacity', 0)
    setInterval(()=>{
        gruppo.setAttribute('opacity', 1)
    }, 1000)    
}
setInterval(randomOpacity, 100)