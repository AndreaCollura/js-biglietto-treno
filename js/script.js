// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, 
// per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. 



// VARIABILI

// richiesta numero kilometri a utente

const numKilometri = parseInt(prompt('Inserire numero kilometri da percorrere'));

// richiesta età utente

const eta = parseInt(prompt('Adesso inserire età'));


// prezzo €/Km 

const euroKilometro = 0.21;

// sconti

// junior
const scontoJunior = 0.20;


// senior
const scontoSenior = 0.40;


// messaggio prezzo finale totale

let messPrezzoFinale = 'Il totale del tuo biglietto é di: €';

const saluti = 'Grazie per averci scelto.'




if (!isNaN(numKilometri && eta) && (eta <= 110) ) {
    if ( eta < 18) {
       messPrezzoFinale += ((numKilometri * euroKilometro) - ((numKilometri * euroKilometro) * scontoJunior)).toFixed(2) + ' ' + saluti;
    } else if (eta >= 65) {
       messPrezzoFinale += ((numKilometri * euroKilometro) - ((numKilometri * euroKilometro) * scontoSenior)).toFixed(2) + ' ' + saluti;
    } else if (eta >= 18 || eta <= 65) {
        messPrezzoFinale +=  (numKilometri * euroKilometro).toFixed(2);
       
    }

} else {
    messPrezzoFinale = 'Arrrgh...dati inseriti errati. Riprova!';
}

// messaggio che uscirá sulla pagina

document.getElementById('totprice').innerHTML = `

    <h1 class="text-center">${messPrezzoFinale}</h1>

`

console.log(messPrezzoFinale)







