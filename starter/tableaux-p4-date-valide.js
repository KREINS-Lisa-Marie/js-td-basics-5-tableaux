/*
TABLEAUX - PRÉPA 4 : Date valide - version 3
- Déclarez deux fonctions :
    - La première fonction 'isBissextile' retourne true ou false selon que l'année est bissextile ou pas.
    - La deuxième fonction 'isValid' retourne true ou false selon que la date est valide ou pas.
    Stockez cette fois le nombre maximum de jours autorisé par mois dans un tableau (utilisez 'isBissextile' pour gérer le cas du mois de février).
- Utilisez 'isValid' pour décider si votre date est valide avant d'afficher votre message dans la console.
*/

// Fonction pour vérifier si une année est bissextile
//function isBissextile(annee) {
    // Code pour déterminer si 'annee' est bissextile
//}

function isBissextile(annee) {
    if (year%4 ===0 && year%100 !== 0){
        return true;
    } else if (year%400 === true){
        return true;
    }
    return false;
}





function getMaxDayPerMonth(month, year) {
    if (isNaN(month) || month < 1 || month > 12 || isNaN(year) || year < 1) {
        console.error(`Month must be [1-12]`);
        console.error(`Year must be >0`);
        return -1;
    }

    const nombreMaxMois = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (isBissextile() === true) {
        nombreMaxMois[2] = 29;
    }

}
    /*
    let maxDays = 31;
    switch (month) {
        case 4:
        case 6:
        case 9:
        case 11:
            maxDays = 30;
            break;
        case 2:
            if (isBissextile(year) === true) {
                maxDays = 29;
            } else {
                maxDays = 28;
            }
    }
    return maxDays;
}

*/



// Fonction pour vérifier si une date est valide
//function isValid(jour, mois, annee) {
    // Code pour vérifier si la date (jour, mois, annee) est valide
//}


function isValid(day, month, year) {
    if (isNaN(day) || isNaN(month) || isNaN(year) || day <= 0 || month <= 0 || year <= 0 || month > 12) {
        return false;
    }
    return day > 0 && day <= getMaxDayPerMonth(month, year);
}



// Utilisez 'isValid' pour vérifier si une date est valide avant d'afficher un message dans la console


isValid();