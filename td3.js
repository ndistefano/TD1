   
document.getElementById("etape4").style.display = "none"; 

document.getElementById("etape4").addEventListener("submit",function(e){
    e.preventDefault();
})


function cookies() {        
    { 
    console.log();               
    document.getElementById("cookies").style.display = "none";
    }
}
    document.getElementById("acceptbutton").addEventListener("click", cookies);


function cookies2() {    
    { 
    console.log();               
    document.getElementById("popin").style.display = "flex"; 
    document.getElementById("cookies").style.display = "none";
        
    }
}    
    document.getElementById("personalbutton").addEventListener("click", cookies2);


function valider () {    

    if (this.id == "a1") {
        document.getElementById("a1").style.background = "green"; 
        document.getElementById("r1").style.background = "grey"; 
    }

    else {
        document.getElementById("a1").style.background = "grey"; 
        document.getElementById("r1").style.background = "red";
    }   
}
            
    document.getElementById("a1").addEventListener("click", valider);
    document.getElementById("r1").addEventListener("click", valider);
        

function valider2 () {    

    if (this.id == "a2") {
        document.getElementById("a2").style.background = "green"; 
        document.getElementById("r2").style.background = "grey"; 
    }

    else {
        document.getElementById("a2").style.background = "grey"; 
        document.getElementById("r2").style.background = "red";
    }   
}
            
    document.getElementById("a2").addEventListener("click", valider2);
    document.getElementById("r2").addEventListener("click", valider2);

function valider3 () {    

    if (this.id == "a3") {
        document.getElementById("a3").style.background = "green"; 
        document.getElementById("r3").style.background = "grey"; 
    }

    else {
        document.getElementById("a3").style.background = "grey"; 
        document.getElementById("r3").style.background = "red";
    }   
}
            
    document.getElementById("a3").addEventListener("click", valider3);
    document.getElementById("r3").addEventListener("click", valider3);


function close () {
    {
    console.log();               
    document.getElementById("popin").style.display = "none";
    }
}

document.getElementById("popin2").addEventListener("click", close);


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
       
    

        
    
    

 
  

      
        
     