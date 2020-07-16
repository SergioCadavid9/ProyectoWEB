function abrirAlerta() {
    alert("Hola esto es una alerta!!");
}

function login(){
    var usuario= document.getElementById('textUser');
    var contraseña= document.getElementById('txtPass');

    console.log(textUser);

    if (usuario.nodeValue=="admin" && contraseña.nodeValue=="admin") {
     location.href= "pagina2.";
    } else {
        location.href="pagina1.html";
    }
}
function hacerAlgo(){
    var reloj = document.getElementById('reloj');
    reloj.innerHTML =new Date(); 
}
 //hacerAlgo();
 setInterval(hacerAlgo, 1000);