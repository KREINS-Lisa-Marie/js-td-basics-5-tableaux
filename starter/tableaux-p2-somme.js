/*
TABLEAUX - PRÉPA 2 : Somme des valeurs
1. Initialisez un tableau qui contient les nombres 11, 3, 7, 2, 9 et 10.
2. Affichez le tableau (précédé du texte : "Voici mon tableau de nombres :").
3. Calculez puis affichez la somme des valeurs du tableau 'nombres' :
   - Utilisez la méthode 'forEach()' pour afficher la somme des nombres dans le tableau (précédée du texte : "La somme des nombres de mon tableau est …").
   - Utilisez une boucle 'for/of' pour faire la même chose.
*/


const nombres = [11, 3, 7, 2, 9, 10];
console.log("Voici mon tableau de nombres :");
console.log(nombres);
console.table(nombres);



let resultat = 0
for (const nombre of nombres) {
    resultat = resultat + nombre;
}
console.log(resultat);







/*
let sommeTableau = 0
for (let nombre of nombres) {
    sommeTableau = sommeTableau + nombre;
    // console.log(`La somme des nombres de mon tableau est ${sommeTableau}`); Ne pas mettre là sinon il affiche chaque valeur
}
console.log(`La somme des nombres de mon tableau est ${sommeTableau}`);

*/
/*
let lasommeTableau = 0
for (let i = 0; i<= nombres.length; i++){
    lasommeTableau = lasommeTableau + nombres[i];
    console.log(lasommeTableau);
}
*/




/*
Version alternative (avec BONUS) :
1. Initialisez
- une variable 'message' à une chaîne vide ;
- une variable 'somme' à 0.
2. Parcourez votre tableau de nombres à l'aide d'une boucle 'for' pour construire le message : "… + … + … = ".
3. Parcourez votre tableau de nombres à l'aide d'une boucle 'for/of' pour calculer la somme des valeurs du tableau.
4. Affichez le message final : "… + … + … = …".
*/



let message = '';
let somme = 0;

//for (const nombre of nombres)

//}



for (let i = 0; i < nombres.length; i++) {
    if (i < nombres.length-1 ) {
        somme = somme + nombres[i];
        message += `${nombres[i]} +`;

    }else if (i === nombres.length -1){
            somme = somme + nombres[i];
            message += `${nombres[i]} `;
        }
    else{
        console.log('erreur!');
    }
}
console.log(`${message} = ${somme}`);


/*
for (let i = 0; i <=nombres.length; i++){
    console.log(  message = `${nombressomme(i===0)} + ${somme(i===1)} + ${somme(i===2)} + ${somme(i===3)} + ${somme(i===4)} + ${somme(i===5)}`);
}
*/
