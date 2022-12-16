/*const aggTask = document.querySelector("input");
const inputButton = document.querySelector('input-button');
cost taskLis*/

const aggTask = ()=>{
    //preso il valore di Input
    let inputHTML = document.querySelector("input")
    //prendere UL
    let ul = document.querySelector("ul")
    //creare LI
    //! VERSIONE INNERHTML //`<li onclick="fatto(event)"> Serve a collegare l'evento a tutte le LI
    let newLi = `<li onclick="fatto(event)">  ${inputHTML.value}  </li>`
    console.log(newLi)
    //inserire nell'UL
    ul.innerHTML += newLi
}
const fatto = (event) => {
   // event.target.remove() //se lo vuoi rimuovere
    event.target.style.textDecoration = "line-through"//se lo vuoi sbarrare 
}