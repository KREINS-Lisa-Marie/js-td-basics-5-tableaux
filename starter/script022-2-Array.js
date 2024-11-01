/*****************************
* 022 - Les tableaux indicés (Arrays)
*/


// 8. Tableau à deux dimensions

/* 
Chaque élément d'un tableau peut lui-même être un tableau.
On parle alors de tableau à deux dimensions.
Voici un exemple de tableau à deux dimensions (un tableau de tableaux),
qui pourrait être utilisé comme tableau de positionnement des mines d'un jeu du démineur.
*/
const mines = [[0, 1, 0, 1],
             [1, 0, 0, 0], 
             [1, 0, 1, 0], 
             [0, 0, 0, 0]];


// pour parcourir le tableau

//for (let i = 0; i < mines.length; i++) {        // pour parcourir chacune des lignes
  //  console.log(mines[i]);
    //for (let j = 0; j < mines[i].length; j++) {     // mines[i].length   car = longeur des lignes // pour parcourir chacune des  colonnes
      //  console.log(mines[i][j]);       // tableau 2 dimensions
    //}
//}

/* 
EXERCICE :
- évaluez chacune des expressions qui suivent
- vérifiez votre réponse en affichant la valeur de l'expression dans la console
*/
mines		// …………………………………………………………………            //tableau
mines[1]	// …………………………………………………………………            // 2eme ligne
mines[0][3] // …………………………………………………………………            // 4eme cellule de premiere ligne




// EXERCICE 7 :
// Etape 1 :
// Pour récupérer la valeur à la deuxième ligne troisième colonne du tableau,
// utilisez les indices corrects (n'oubliez pas que les indices commencent à zéro).
//console.log(mines[1][2]);


// Testez de la même manière l'emplacement situé en première ligne quatrième colonne
//console.log(mines[0][3]);

// Etape 2 :
// Pour indiquer combien de mines contient la première ligne de ce tableau,
// vous devez parcourir les éléments de cette ligne et compter combien d'entre eux sont égaux à 1.
    console.log(mines[0]);

    let combiendemines = 0;

    if ( mines[0]) {
       // console.log(mines[i]);        Ne pas faire ! crash
        for (let j = 0; j < mines[0].length; j++) {     // mines[i].length   car = longeur des lignes // pour parcourir chacune des  colonnes
            if (mines[0][j]=== 1){
                combiendemines ++;
            } else {
                combiendemines;
            }
        }
        }
    else{
        console.log('erreur');
    }
    console.log(`Il y a ${combiendemines} qui sont égaux à 1`);
