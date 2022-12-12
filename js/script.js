
document.getElementById(`button`).addEventListener(`click`, function () {
    document.querySelector(`.grid`).innerHTML = ``;





    // function showAllBombs(bombs, cellNumber){
    function showAllBombs(bombs, cellNumber) {
        const cells = document.getElementsByClassName(`square`)

        for (let i = 0; i < cells.length; i++) {
            let cell = cells[i]
            if (bombs.includes(parseInt(cell.innerText))) {
                cell.classList.add(`clicked`)
                cell.classList.add(`red`) 
            }

        }
    }


    // Definisco variabile per tenere traccia delle caselle non bomba cliccate

    let goodcells = 0

    // Ciclo che permette di generare 100 celle
    // ******************************************************************************
    for (let i = 0; i < 100; i++) {
        const currentSquare = createGridSquare(i + 1);


        // Con l'evento "click", mediante la classe "clicked", poi stilizzata in CSS, impartiamo il comando di far diventare ogni singola cella di colore azzurro ogni volta che ci clicchiamo sopra.
        currentSquare.addEventListener(`click`, function () {
            this.classList.add(`clicked`);
            console.log(this.innerText)

            if (bombs.includes(parseInt(this.innerText))) {
                this.classList.add(`red`)
                grid.classList.add(`events-none`)
                showAllBombs(bombs, 100)
                alert(`Hai preso una bomba alla casella numero: ` + this.innerText)
                alert(`Hai totalizzato ` + goodcells + ` punti`)
            }

            else {
                goodcells++
            }
        });

        // "appendChild" crea un figlio all'interno dell'elemento che seleziono, in questo caso "grid". Risultato, all'interno dell'HTML dell'elemento con id "grid" che è collegato alla variabile "grid" di javascript, vengono creati "div" pari al numero del ciclo For.
        grid.appendChild(currentSquare);

    }
    // ******************************************************************************

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

let bombs

function createBombsArray(min, max) {

    bombs = []
    let i = 0
    while (i < 16) {

        let random_number = Math.floor(Math.random() * (max - min + 1)) + min;

        if (!bombs.includes(random_number)) {
            bombs.push(random_number)
            i++
        }

    }

    return bombs
}

 

let arrayBombs = createBombsArray(1,100)
console.log(arrayBombs)


// function generateUniqueRandomNumber(bombs, min, max)
// {
//     let flag = false
//     let randomInt

//     while(!flag == false){
//         randomInt = Math.floor(Math.random() * (max - min + 1)) + min; 

//         if(bombs.includes(randomInt)){
//             flag=true
//         }
//     }

//     return randomInt
// }  