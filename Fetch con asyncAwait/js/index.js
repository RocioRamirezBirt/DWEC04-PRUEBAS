'use strict'

console.log('funcionando');

// FUNCIONES ANONIMAS AUTOEJECUTABLES
(() => {

    var btn = document.getElementById('boton');

    btn.addEventListener('click',obtenerUser);

    async function obtenerUser() {
        try {
            const response = await fetch('https://randomuser.me/api/', {method: 'GET'});
            console.log(response)
            const data = await response.json(); // convertir el json tipo redeableStream en objeto
            const usuario = data.results[0];

            document.getElementById('foto-user').src=`${usuario.picture.large}`;
            document.querySelector('.nombre-user span').textContent=`${usuario.name.first}  ${usuario.name.last}`
            document.querySelector('.correo-user span').textContent=`${usuario.email}`
            document.querySelector('.tel-user span').textContent=`${usuario.phone}`
        }catch(err) {
            console.error("error al obtener informacion de la api")
        }

    }

})();

