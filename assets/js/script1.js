/*
//Exe1: Afficher Hello World
alert("Hello World!");
*/

/*
//Exe2: variables
var a=33;
var b=56;
var somme=a+b;
alert(a+" + "+b+" = "+somme);
*/

/*
//Exe3: Interraction avec user
var nom=prompt("Entrer votre nom");
alert("Bienvenue "+nom);
*/
/*
//Exe4: addition 2 nombres
var n1 = parseInt(prompt("Entrer N1"));
var n2 = parseInt(prompt("Entrer N2"));
var somme=n1+n2;
alert(n1+" + "+n2+" = "+somme);*/
//exe5: demande age user
/*
var Annee=parseInt(prompt("entrer votre annee de naissance"));
var Age=2023-Annee;
alert("vous avez "+Age+" ans");*/
//Ex: test genre avec condition
/*
var Sexe=prompt("enter votre sexe (masculin ou feminin)");
if(Sexe="masculin"){
    alert(" vous etes un homme");
}
else{
    alert("vous etes une femme");
}*/
/*
var sexe=prompt("entrez votre sexe");
switch(sexe)
{
    case"F":
    alert(" vous etes une femme");
    break;
    case"M":
    alert(" vous etes un homme");
    break;
    default: 
    alert(" erreur");
}*/
/*
var nom=prompt(" entrer votre nom");
var rep=parseInt(prompt("entrer le nombre de fois"));
var i=0;
while(i<=rep){
    alert(nom);
    i++;
}*/
/*
function plusGrand(a,b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}
var n1=parseInt(prompt("entrer le premier nombre"));
var n2=parseInt(prompt(" entrer le deuxieme nombre"));
alert("le plus grand nombre entre " +n1+" et "+n2+" est "+plusGrand(n1,n2));*/
function exercice1(){
    var n1=parseInt(document.getElementById('n1').value);
    var n2=parseInt(document.getElementById('n2').value);
    var somme=n1+n2;
    document.getElementById("result").value=somme;
}