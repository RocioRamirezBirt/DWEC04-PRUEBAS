'use strict'

console.log('funcionando');

// FUNCIONES ANONIMAS AUTOEJECUTABLES
(()=>{
    const contenedor = document.getElementById('contenedor');
    const fragment = document.createDocumentFragment();
    var btn = document.getElementById('boton');

    btn.addEventListener('click', obtenerUser);

    function obtenerUser(){
        fetch('https://randomuser.me/api/',{
            method: 'GET' 
            }
        ).then(res => res.json()) // formato 
        .then(data => {
            var usuario = data.results[0];

            document.getElementById('foto-user').src=`${usuario.picture.large}`;
            document.querySelector('nombre-user span').textContent=`${usuario.name.first}  ${usuario.name.last}`
            document.querySelector('correo-user span').textContent=`${usuario.email}`
            document.querySelector('tel-user span').textContent=`${usuario.phone}`
        }).catch(err => {
            console.error("error al obtener informacion de la api")
        }).finally(() =>{
            console.error("esto siempre se ejecuta") 
        })        
        
        



    }





})();

