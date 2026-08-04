const fondo = document.getElementById("stars");

for(let i=0;i<250;i++){

    const star=document.createElement("div");

    star.classList.add("star");

    if(Math.random()>0.9){

        star.classList.add("big");

    }

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    star.style.animationDelay=Math.random()*4+"s";

    fondo.appendChild(star);

}