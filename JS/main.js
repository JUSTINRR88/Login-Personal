let entrada = document.querySelector(".registro");
let entrada2 = document.querySelector(".contra");
let btn = document.querySelector(".btn_login");

function verificacion_de_datos(){
    let nombre = "Justin";
    let contra_usu = 1234;

    if(entrada.value === nombre && entrada2.value == contra_usu){
        console.log("datos correctos");
    }else{
        console.log("datos incorrectos");
    }
}


btn.addEventListener("click", verificacion_de_datos);