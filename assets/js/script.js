addEventListener("scroll",(event) => {
    if (scrollY >= 353.86){
    document.querySelector(".navbar").classList.add("changeColor");
    }
    else{
        document.querySelector(".navbar").classList.remove("changeColor");
    }
})

let svg = document.querySelector('.svg svg');

//seleziono tutti gli elementi g che hanno l'attributo opacity

let arrayGroup = [...svg.querySelectorAll('g[opacity]')]

function randomOpacity(){
    let index = Math.floor(Math.random()*arrayGroup.length+1)
    let gruppo = arrayGroup[index]

    gruppo.setAttribute('opacity', 0)
    setTimeout(()=>{
        gruppo.setAttribute('opacity', 1)
    }, 2000)
}
setInterval(randomOpacity, 100)