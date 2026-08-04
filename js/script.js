function mostrarCapsula(){

document.getElementById("inicio").style.display="none";

document.getElementById("espacio").style.display="block";

}


function abrirCapsula(){

document.querySelector(".capsula")
.classList.add("abierta");


let musica = document.getElementById("musica");

musica.play();


setTimeout(()=>{


document.querySelector(".capsula")
.style.display="none";


document.getElementById("carta")
.style.display="block";


crearCorazones();


},1200);


}



function crearCorazones(){


setInterval(()=>{


let corazon=document.createElement("div");


corazon.className="corazon";


corazon.innerHTML="🩷";


corazon.style.left=Math.random()*100+"vw";


corazon.style.bottom="0";


document.body.appendChild(corazon);



setTimeout(()=>{

corazon.remove();

},5000);



},400);


}