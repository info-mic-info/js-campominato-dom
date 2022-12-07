
document.getElementById(`button`).addEventListener(`click`, function(){
    document.querySelector(`.grid`).innerHTML = ``;

    for (let i = 0; i < 100; i++) {
        const currentSquare = createGridSquare(i + 1);
    
    
        // Con l'evento "click", mediante la classe "clicked", poi stilizzata in CSS, impartiamo il comando di far diventare ogni singola cella di colore azzurro ogni volta che ci clicchiamo sopra.
        currentSquare.addEventListener(`click`, function () {
            this.classList.add(`clicked`);
            console.log(this.innerText)
        });
    
        // "appendChild" crea un figlio all'interno dell'elemento che seleziono, in questo caso "grid". Risultato, all'interno dell'HTML dell'elemento con id "grid" che è collegato alla variabile "grid" di javascript, vengono creati "div" pari al numero del ciclo For.
        grid.appendChild(currentSquare);
    
    }

})



 


// Questa funzione crea una "div", gli aggiunge una "classe=square" e con return la restituisce
// ******************************************************************************
function createGridSquare(number) {

    // Crea un div
    const currentElement = document.createElement(`div`);

    // Aggiunge al Div la classe=square
    currentElement.classList.add(`square`); 

    currentElement.innerHTML = number;

    // Restituzione
    return currentElement;
}
// ******************************************************************************




// Dichiaro la variabile "let grid" e la vado ad inserire nel div con "id=grid"
let grid = document.getElementById(`grid`);


// Ciclo che permette di generare 100 celle
// ******************************************************************************


// ******************************************************************************

// let play=document.getElementById (`play`)

// play.addEventListener(`click`, function () {
//     if (document.getElementById) {
//         if (document.getElementById(id).style.display == 'none') {
//             document.getElementById(id).style.display = 'block';
//         } else {
//             document.getElementById(id).style.display = 'none';
//         }
//     }
// }


