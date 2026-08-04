const boton=document.getElementById("entrar");

boton.addEventListener("click",()=>{

    document.body.style.transition="1s";

    document.body.style.opacity="0";

    setTimeout(()=>{

        alert("Bienvenido a Nuestro Universo ❤️");

        document.body.style.opacity="1";

    },1000);

});