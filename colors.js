//INHOUD: ITEREREN MBV forEach Method, IN VERGELIJKING MET WHILE- EN FOR LOOP 
//          VOORDELEN forEach Method ivm WHILE- EN FOR LOOP 
//          VRAGEN: HOE HERKENT HET DE KLEUREN MET ALLEEN DE NAAM 'COLOR'? 
//          ITEREREN OVER EEN OBJECT: NIET MET EEN forEachMethod!! 

//Deze while loop is opgebouwd als volgt: i geeft de waarde van de array 
// in de while loop wordt aangeduid: als i < de totale lengte van de array (colors), worden de nummers van de colors geprint 
// De i++ telt de waarde van i op, als de length dan wordt overschreden, stopt het printen van de colors 
/*
const colors = ['yellow', 'blue', 'red', 'orange'];
let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++;
}

//Dezelfde functie als hierboven, gebruik gemaakt van een for-loop 
const colors = ['yellow', 'blue', 'red', 'orange'];
for (i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
*/

//Itereren over een functie mbv de forEach method 
const colorArray = ['yellow', 'blue', 'red', 'orange'];

colorArray.forEach((color) => console.log(color));

/*
1. Een for loop neemt 3 regels in beslag
    Een while loop neemt 5 regels in beslag
2. Een forEach method neemt 1 regel in beslag, met een arrow function
3. Voordelen; 
    Je loopt geen risico op een infinite loop. 
    Je itereert direct naar het element waarnaar je verwijst, door deze op te roepen. 
    Je maakt geen gebruik van de i, om aan te geven waar je bent. 
*/

//Itereren over een OBJECT. Echter Array methods zijn niet bruikbaar op een object. Dus het effect is hetzelfde, maar je gebruikt een andere weg 
const colors = {
    color1: "yellow",
    color2: "orange",
    color3: "red",
    color4: "cyaan",
};

for (x in colors) {
    console.log(colors[x]);
}