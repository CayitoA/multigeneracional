const enviarFormulario = async () => {
    const boton = document.getElementById('botonformulario2')
    const nombre = document.getElementById('inputnombre')
    const email = document.getElementById('inputmail')
    const telefono = document.getElementById('inputtelefono')
    const comentario = document.getElementById('floatingTextarea2')
    const checkboxEstudio = document.getElementById('gridCheck1')
    const checkboxSupervision = document.getElementById('gridCheck2')
    const checkboxFamilia = document.getElementById('gridCheck3')
    boton.innerHTML = 'enviado'
    boton.style.background = '#030a8c'
    console.log(boton)
    console.log(nombre.value)
    console.log(telefono.value)
    console.log(email.value)
    console.log(comentario.value)
    console.log(checkboxEstudio)
    console.log(checkboxSupervision)
    console.log(checkboxFamilia)


    const respuesta = await fetch(
        'https://us-central1-cim-dev-caa.cloudfunctions.net/registrarServicio',

        {
            method: 'POST',
            redirect: 'follow',
            cache: 'no-store',
            body: `{"nombre": "${nombre.value}", "email": "${email.value}",
               "telefono": "${telefono.value}", "comentario": "${comentario.value}",
               "estudio": "${checkboxEstudio.checked}", "supervision": "${checkboxSupervision.checked}",
               "familia": "${checkboxFamilia.checked}"
            }`,
            headers: { 'Content-Type': 'text/plain' }
        },
    )
    const data = await respuesta.json()
    console.log('data: ', data)
}
