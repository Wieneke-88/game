//Requirements 
/*
1. Begroeting gebruiker - "Welkom, wat is je naam?"
    prompt --> grbuiker moet naam invoeren = vraag 2
2. Gebruiker moet naam in kunnen voeren in de browser en op enter drukken. 


3. Na invoering naam, krijgt de gebruiker bericht " Hey + naam"
    alert: bericht: "hey + naam"

4. Gebruiker krijgt vraag: "Voer een nr in van 0 - 25 om te beginnen met raden"
    prompt: voer nr in, 

5. Voor een reeele winkans: Pak een willekeurig getal van 0-25 
    functie: win met if/else statement 

6. Gebruiker moet nr in kunnen voeren en dan op enter kunnen klikken. 
    Bovenstaande functie met prompt: voer nr in 

7. Bij fout nr: "Dat is niet correct "
    Daarna: "Raad opnieuw "
    alert 

8. Bij goed nr: " Gefeliciteerd, je hebt gewonnen"
    alert 

9. Gebruiker krijgt bericht: "Dag + naam"
    alert 
*/

//return functies later verwerken in aparte functie? zoals eerder geleerd in de verwijzingen van functie naar functie? 
const userName = function (naam) {
    const naam = prompt("Welkom, wat is je naam?" + naam);
    return greetUser();
}

const greetUser = function (naam) {
    const result = confirm("Welkom " + naam);
    const result = prompt("Geef een nummer tussen 0 en 25" + guessNumber);
    return winningNumber();
};

const winningNumber = function (guessNumber) {
    const win = 12;
    if (guessNumber === 12) {
        const result = alert("Gefeliciteerd, je hebt gewonnen");
        return greetWinner();
    } else {
        const result = alert("Dat is niet correct");
        const result = prompt("Raad opnieuw");
    }
}

const greetWinner = function () {
    const result = alert("Dag " + naam);
}

greetUser();