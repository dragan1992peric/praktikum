var trenutno = new Date();
var dan = trenutno.getDate();
var mesec = trenutno.getMonth()+1;
var godina = trenutno.getFullYear();



function nova (){
    checkCookie();
if (mesec == 1 || mesec == 2 || mesec == 3)
document.body.style.backgroundImage = "url('sl2.jpg')";
else if (mesec == 4 || mesec == 5 || mesec == 6)
document.body.style.backgroundImage = "url('sl1.jpg')";
else
document.body.style.backgroundImage = "url('sl3.jpg')";

}
function setCookie() {
    var cname = "kolac"
    var exdays = 30;
    var ime = document.getElementById("ime").value;
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + ime + ";" + expires + ";path=/";
}

function getCookie() {
    var name = "kolac" + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function DodPon (){
    try{
    var a=prompt("unesi kljucnu rec");

    if (a==="admin"){
        document.getElementById("e").className = "q";
    }
    else{
        alert("invalid function");
    }
}
catch(err){
    alert(err);
}
}

function Cao (){
    try{
    alert("cao admin");
        document.getElementById("e").className = "w";
}
catch(err){
    alert(err);
}
}

function checkCookie() {
    var username = getCookie("kolac");
    if (username != "") {
        alert("Dobrodosli nazad " + username);
    }
}

function unoskupona(){
    try{
var ekupon = document.getElementById("kupon");
    if(ekupon.checked)
      document.getElementById("akupon").disabled = false;
	  else
	  document.getElementById("akupon").disabled = true; }
    catch (err) {
        alert(err);
    }
}

function podaci(){
var cena;
var popust;
var brojsedista;
var ispis;

var ime = document.getElementById("ime").value;
var prezime = document.getElementById("prezime").value;
var brleta = document.getElementById("brleta").value;
var aerodrom = document.getElementById("aerodrom").value;
var kupon = document.getElementById("akupon").value;
var brsedista = document.getElementById("brsedista").value;

switch(brsedista){
case "Jedno":
brojsedista = 1;
         break;
case "Dva":
brojsedista = 2;
         break;
case "Tri":
brojsedista = 3;
         break;
}

switch(aerodrom){
case "Bali":
cena = 130 * brojsedista ;
         break;
case "London":
 cena = 150 * brojsedista;
         break;
case "Paris":
cena = 170 * brojsedista;
         break;
case "Rome":
cena = 190 * brojsedista;
         break;
case "New York City":
cena = 210 * brojsedista;
         break;
case "Crete":
cena = 230 * brojsedista;
         break;
case "Barcelona":
cena = 250 * brojsedista;
         break;		 
}

switch(kupon){
case "kupon5":
popust = (5 * cena)/100;
         break;
case "kupon3":
popust = (3 * cena)/100;
         break;
case "":
popust = 0;
         break;
default:
alert("Kupon nije validan.");
popust = 0;
         break;
}
obracun = cena - popust;

if ((ime == "") || (prezime == "") || (brleta == "") || (aerodrom == ""))
{
alert("Niste uneli sve vrednosti.");
}
else if ((kupon == "")){
ispis = "Ime: " + ime + "<br>Prezime: " + prezime + "<br>Broj leta: " + brleta + "<br>Destinacija: " + aerodrom + "<br>Cena " + cena + " EUR" + "<br>Obracun: " + "<fieldset>" +obracun + " EUR" + "</fieldset>" + "<br>Porudzbina napravljena: " + dan + "." + mesec + "." + godina;
document.getElementById("polje").innerHTML=ispis;
setCookie()
}
else{
ispis = "Ime: " + ime + "<br>Prezime: " + prezime + "<br>Broj leta: " + brleta + "<br>Destinacija: " + aerodrom + "<br>Kupon: " + kupon + "<br>Cena " + cena + " EUR" + "<br>Popust: " + popust + " EUR" + "<br>Obracun: " + "<fieldset>"+obracun + " EUR" + "</fieldset>" + "<br>Porudzbina napravljena: " + dan + "." + mesec + "." + godina;
document.getElementById("polje").innerHTML=ispis;
setCookie()
}
}