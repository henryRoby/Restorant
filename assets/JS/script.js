//prenom popup
$(function(){
  var myName = sessionStorage.getItem("myName");

  if(!myName){
    myName = prompt("Bonjour, quel est votre prénom ?");
    sessionStorage.setItem("myName", myName);
  }
  document.getElementById("prenom").textContent= myName;

});

// date et heure
var d = new Date();
var mois= d.getMonth()+1;

function lenTwo(fn){
	return function(){return ('0'+fn.call(this)).substr(-2,2)}
}
with(Date.prototype){
	getDay = lenTwo(getUTCDate);
	getMonth = lenTwo(getMonth);
	getHours = lenTwo(getHours);
	getMinutes = lenTwo(getMinutes);
}

var jour = d.getDate()+'/'+mois+'/'+d.getFullYear();
var heure = d.getHours()+':'+d.getMinutes();
var ouvert = false;

if(d.getHours() >= 12 && d.getHours() < 15){
  document.getElementById("ouvertureResto").innerHTML = "Nous sommes le " + jour+ " et il est "+heure+", nous sommes donc <strong>ouverts</strong>";
} else if (d.getHours() >= 18 && d.getHours() <= 23){
  document.getElementById("ouvertureResto").innerHTML = "Nous sommes le " + jour+ " et il est "+heure+", nous sommes donc <strong>ouverts</strong>";
}else{

document.getElementById("ouvertureResto").innerHTML = "Nous sommes le " + jour+ " et il est "+heure+", nous sommes donc <strong>fermés</strong>";
};

