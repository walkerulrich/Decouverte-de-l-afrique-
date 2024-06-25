console.log("Je suis la console 1 !");
function bienvenu(){
    alert('BIENVENUE Sur La plateforme: MALICKA')
} 
/*setTimeout(function() {bienvenu();}, 1000000);*/
/*setInterval(function() {bienvenu();}, 5000);*/


function resultat() {
    // Récupérer les valeurs du formulaire
    var nom = document.getElementById('l').value;
    var prenom = document.getElementById('p').value;
    var nombrecar = document.getElementById('e').value;
    var date = document.getElementById('a').value;
    var pays = document.getElementById('c').value;



    // Afficher les valeurs dans la console (vous pouvez les envoyer à un serveur ici)
    console.log("Nom:", nom);
    console.log("Prenom:", prenom);
    console.log("Tel:", nombrecar);
    console.log("Date:", date);
    console.log("Pays:", pays);
    alert("salut  "+nom+","+prenom+" avez choisi le "+pays+" votre formulaire a ete bien enregistrer ")

 
}
