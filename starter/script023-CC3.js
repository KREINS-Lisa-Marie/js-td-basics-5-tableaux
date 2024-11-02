/*****************************
* 023 - TABLEAUX - CODING CHALLENGE 3
*/
// 1. Créez un tableau appelé 'factures' contenant les trois montants des factures.
// 2. Créez une fonction appelée 'calculateurPourboire' prenant une facture comme argument.
// 3. À l'intérieur de la fonction 'calculateurPourboire', utilisez des instructions conditionnelles pour calculer le pourboire en fonction du montant de la facture.
//    - Si la facture est inférieure à $50, calculez 20% de la facture.
//    - Si la facture est entre $50 et $200, calculez 15% de la facture.
//    - Si la facture est supérieure à $200, calculez 10% de la facture.
// 4. La fonction 'calculateurPourboire' devrait renvoyer le montant du pourboire.
// 5. Créez un tableau vide appelé 'pourboires'.
// 6. Créez un autre tableau vide appelé 'montantsFinaux'.
// 7. Utilisez la fonction 'calculateurPourboire' pour calculer les pourboires pour chaque facture du tableau 'factures' et ajoutez-les au tableau 'pourboires'.
// 8. Pour chaque facture, calculez le montant final payé en ajoutant le montant de la facture au montant du pourboire, puis ajoutez-le au tableau 'montantsFinaux'.
// 9. Affichez les tableaux 'pourboires' et 'montantsFinaux' dans la console pour voir les résultats.


    const factures = [57, 108, 199];



    function calculateurPourboire(facture) {
        let pourboir = 0;

        if (facture<50){
            pourboir= facture*0.2;
        }else if(facture <200 && facture>=50){
            pourboir= facture*0.15;
        }else {
            pourboir= facture*0.1;
        }
        return pourboir;
    }


const pourboires = [];
const montantsFinaux= [];


for (const facture of factures) {
    let result = 0;
    result = calculateurPourboire(facture);
    pourboires.push(result);
    let montant = 0;
    montant = facture + result;
    montantsFinaux.push(montant);
}
console.log(pourboires);
console.log(montantsFinaux);





console.log(calculateurPourboire(70));
    /*
for (const facture of factures) {
    pourboires[facture] = pourboir;
    console.log(pourboires);
}
for (const facture of factures) {
    montantsFinaux = factures[facture] + pourboires[pourboir];
}*/



























    /*



const factures= [100, 74, 199];

function calculateurPourboire(factures) {
    const pourboires = [];
    const montantsFinaux = [];
    for (const facture of factures) {
        if (facture<50 ){
            pourboires.push(facture*0.2); // valeur qu'on va pousser dans le tableau
        }else if(facture<200){
            pourboires.push(facture*0.15);
        }else{
            pourboires.push(facture*0.10);
        }
    }
    for (let i = 0; i < factures.length; i++) {
        montantsFinaux[i]= factures[i] + pourboires[i];           //factures[i]+= pourboires[i];
    }
    //return montantsFinaux;
    console.log(pourboires);
    console.log(montantsFinaux);
}
//console.log(calculateurPourboire());
//console.log(montantsFinaux);
*/