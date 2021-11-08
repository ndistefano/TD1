   
document.getElementById("etape4").style.display = "none"; 

document.getElementById('etape4').addEventListener('submit',function(e){
    e.preventDefault();
})

function bonjour() {    
    let saisie = document.getElementById("prenom").value;
    document.getElementById("changerTexte2").style.display = "none";

    { 
    console.log(saisie);    
    document.getElementById("changerTexte").innerText="Bonjour "+ saisie ;
    document.getElementById("message").innerText="Le site n’est pas tout à fait terminé ! Pour être informé de son ouverture officielle, n’hésites pas à laisser ton mail.";   
    document.getElementById("demande").innerText="Votre adresse mail";
    document.getElementById("etape4").style.display = "block"; 
    document.getElementById("changerTexte2").innerText="Merci "+ saisie + " et à bientôt!" ; 
    document.getElementById("accueil").style.display = "none";
    
    }
}

    document.getElementById("valider").addEventListener("click", bonjour); 

    
    
function merci() {
    
    let saisie = document.getElementById("prenom").value;
    let adresse = document.getElementById("mail").value;

    
    { 
    console.log(adresse);               
    console.log(document.getElementById("message2").innerText="Nous te confirmons que tu seras informé(e) sur ton email : " + adresse);
    document.getElementById("changerTexte2").style.display = "block";
    document.getElementById("changerTexte").style.display = "none";
    document.getElementById("demande").style.display = "none";
    document.getElementById("mail").style.display = "none";
    document.getElementById("confirmMail").style.display = "none";
    document.getElementById("message").style.display = "none";
    }
}
    document.getElementById("confirmMail").addEventListener("click", merci);


        

    

 
  

      
        
     