'use strict'

console.log('funcionando');



// INSTANCIA DEL OBJETO XMLHTTPRequest
(()=>{

    const contenedor = document.getElementById('contenedor');
    const fragment = document.createDocumentFragment();
    var btn = document.getElementById('boton');

    btn.addEventListener('click',obtenerUser);

    function obtenerUser(){

        const xhr = new XMLHttpRequest();  //1º instancia
        xhr.open('GET','https://randomuser.me/api/'); //2º metodo que va a abrir la peticion parametros  metodo y url

        xhr.onload = function(){ // 3º configurar la logica de la devolucion

            //VALIDACIONES
            if(xhr.readyState!==4)return;
            console.log(xhr);
            if(xhr.status >= 200 && xhr.status < 300){
                var usuario = JSON.parse(xhr.responseText).results[0];
                console.log(usuario);

                if(usuario.gender === 'female'){
                    document.querySelector('h1').style.background = 'linear-gradient(to right, rgb(0,49,148),rgb(255, 0, 234))'
                    document.querySelector('button').style.background = 'linear-gradient(to right, rgb(0,49,148),rgb(255, 0, 234))'
                }
                document.getElementById('foto-user').src=`${usuario.picture.large}`;
                document.querySelector('.nombre-user span').textContent=`${usuario.name.first}  ${usuario.name.last}`;
                document.querySelector('.correo-user span').textContent=`${usuario.email}`
                document.querySelector('.tel-user span').textContent=`${usuario.phone}`
            }else{
                console.error("error al obtener informacion de la api")
            }
        }
        xhr.send();
    }
    

})();
