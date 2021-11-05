function bonjour() {
    let saisie = document.getElementById("prenom").value;

    { 
    console.log(saisie);    
    document.getElementById("changerTexte").innerText="Bonjour "+ saisie ;
    document.getElementById("message").innerText="Le site n’est pas tout à fait terminé ! Pour être informé de son ouverture officielle, n’hésites pas à laisser ton mail.";   
    document.getElementById("demande").innerText="Votre adresse mail";
    }
}
    document.getElementById("valider").addEventListener("click", bonjour); 
    
    function merci() {
        let saisie = document.getElementById("prenom").value;
        let adresse = document.getElementById("mail").value;
        { 
        console.log(adresse);        
        alert(document.getElementById("message2").innerText="Merci "+ saisie +"," + "nous te confirmons que tu seras informé sur ton email :" + adresse);
        }
    }

        document.getElementById("confirmMail").addEventListener("click", merci);
  
          



