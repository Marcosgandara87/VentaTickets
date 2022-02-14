

var tot= 0
var canti = 0
var check = 0

document.getElementById("Import").innerHTML = tot;
function miFunc() {
 
   
    const check = document.querySelector('#check').value;
    const canti = document.querySelector('#cant').value;
    tot =  canti *  (200 - ( 200*(check/100)))
    //document.getElementById("Import").innerHTML = tot;
    document.querySelector("#Import").innerHTML= tot;    
   
}

function Borrar() {
 
    document.getElementById("nomb").value = "";
    document.getElementById("nomb1").value = "";
    document.getElementById("nomb2").value = "";
    document.getElementById("cant").value = 1;
    document.getElementById("check").value = 80;
    document.getElementById("Import").innerHTML = 0;

}


