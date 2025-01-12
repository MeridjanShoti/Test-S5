/* ascolto quando la scrollbar arriva oltre l'altezza della parte con background giallo e
aggiungo una classe che cambierà il css, triggerando così l'animazione */
addEventListener("scroll",(event) => {
    if (scrollY >= 353.86){
    document.querySelector(".navbar").classList.add("changeColor");
    }
    //tolgo la classe riportando alla situazione iniziale quando lo scoll torna nel range di altezza della parte gialla
    else{
        document.querySelector(".navbar").classList.remove("changeColor");
    }
})
//seleziono l'svg che sta nel div con classe svg
let svg = document.querySelector('.svg svg');
/*seleziono tutti gli elementi g che hanno l'attributo opacity='1' e li metto in un array 
(in precedenza selezionavo senza specificare il valore di opacity e le m aumentavano, così invece non verranno mai accese m che non sono già accese in partenza).
N.B. ho usato il :not per escludere i g con la proprietà aria-label, che quando venivano selezionati mi spegnevano tutte le M in contemporanea */
let array = [...svg.querySelectorAll('g[opacity="1"]:not(g[aria-label])')]
//funzione per animare l'svg
function randomOpacity(){
    //seleziono un numero random da usare come index compreso tra 0 e la lunghezza dell'array -1 (perchè altrimenti andrei a selezionare un elemento non contenuto nell'array)
    let index = Math.floor(Math.random()*array.length)
    let m = array[index]
    //attribuisco alle M una opacity di 0 e le riaccendo dopo 2 secondi
    m.setAttribute('opacity', 0)
    setTimeout(()=>{
        m.setAttribute('opacity', 1)
    }, 2000)
}
//chiamo la funzione ogni 100 millisecondi
setInterval(randomOpacity, 100)