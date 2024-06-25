
function afficherMessage(){
    
    console.log("hello");
    var nom = document.forms.monformulaire.elements.field1.value;
    var prenom = document.forms.monformulaire.elements.field2.value;
    var mail = document.forms.monformulaire.elements.field3.value;
    var message = document.forms.monformulaire.elements.field5.value;
    var pays = document.forms.monformulaire.elements.field6.value;
    var aliment = document.forms.monformulaire.elements.field7.value;
    var sejour = document.forms.monformulaire.elements.field8.value;
    var culture = document.forms.monformulaire.elements.field9.value;
    
    var monmessage = "Bonjour " + prenom + " " + nom + ", "+ "votre renseignement sur le : " + pays + " est : " + message + "\nAvec une "+ aliment + "alimentation, votre séjour a été" + sejour + "\nVous avez trouvé la culture "+ culture;
    alert("Votre renseignement a bien été recu ! \nVous  allez recevoir une réponse par : " + mail);
    var newElement = document.createElement('p');
    newElement.textContent = monmessage;
    newElement.style.color = "gray" ;
    document.getElementById('reponse').appendChild(newElement);

}