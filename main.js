var nightmodebb = false;
function hide(){
document.getElementById("rates").style.display="none";
document.getElementById("hide").style.display="none";
document.getElementById("show").style.display="block";
}	
function show(){
document.getElementById("rates").style.display="block";
document.getElementById("hide").style.display="block";
document.getElementById("show").style.display="none";
}	
function clickresult(){
window.open("why.html","_self")
}

function enablepurchase(){
document.getElementById("purchasebtn").classList.remove("w3-disabled");
document.getElementById("purchasebtn").setAttribute("onclick","clickresult()");
}
function togglenm(){ 
if(nightmodebb == false){
document.body.style.backgroundColor = "rgb(38, 41, 38)";
document.body.style.color = "white";
document.getElementById('rates1').classList.remove("w3-green");
document.getElementById('ratestable').style.backgroundColor="rgb(47, 48, 48)";
document.getElementById('paymentselect').style.backgroundColor="rgb(47, 48, 48)";
document.getElementById('paymentselect').style.color="white";
document.getElementById('maintext').classList.remove('w3-sand');
document.getElementById('maintext').backgroundColor = "rgb(47, 48, 48)";
document.getElementById('maintext').color = "white";
document.getElementById('nightmode').src = "images/lightmode.png";
document.getElementById('titletext').style.color = "rgb(204, 255, 153)";
document.getElementById('rates1').style.backgroundColor= "rgb(38, 38, 38)"
document.getElementById('maintext').style.backgroundColor="rgb(47, 48, 48)"
nightmodebb = true;
}else if(nightmodebb=true){
document.body.style.backgroundColor = "white";
document.body.style.color = "black";
document.getElementById('rates1').classList.add("w3-green");
document.getElementById('ratestable').style.backgroundColor="white";
document.getElementById('paymentselect').style.backgroundColor="white";
document.getElementById('paymentselect').style.color="black";
document.getElementById('maintext').classList.add('w3-sand');
document.getElementById('maintext').backgroundColor = "white";
document.getElementById('maintext').color = "black";
document.getElementById('nightmode').src = "images/nightmode.png";
document.getElementById('titletext').style.color = "rgb(7, 99, 24)";
document.getElementById('rates1').style.backgroundColor="white"
document.getElementById('maintext').style.backgroundColor="white"

nightmodebb = false;


}
}