window.onload = function() {
        // console.log(document.main_form.elements)
        // console.log(`name: ${document.main_form.elements.name.value}`)

        // console.log(document.getElementById('pregunta_si').value)
        // console.log(document.getElementById('pregunta_si').checked)

        // document.getElementById('pregunta_si').onchange = changeValue
        // document.getElementById('pregunta_no').onchange = changeValue

        document.getElementById('submit').onclick = onClick
            // document.getElementById('submit').onclick = nameSurname
            // document.getElementById('submit').onclick = maxDescription
        document.getElementById('submit').ondblclick = doubleClick

        document.main_form.elements.pregunta_si.checked = false
        document.main_form.elements.pregunta_no.checked = false
        document.main_form.elements.pregunta_nsnc.checked = false
        document.main_form.elements.name.value = ''
        document.main_form.elements.surname.value = ''
        document.main_form.elements.description.value = ''
        document.main_form.elements.condiciones.checked = false
        document.main_form.elements.privacidad.checked = false


        document.main_form.elements.submit.disabled = true
        document.getElementById('condiciones').onchange = onChange
        document.getElementById('privacidad').onchange = onChange

        document.main_form.elements.opciones.disabled = true
        document.getElementById('pregunta_si').onchange = onChange
        document.getElementById('pregunta_no').onchange = onChange
        document.getElementById('pregunta_nsnc').onchange = onChange

    }
    // function changeValue(e) {
    //     console.log('changed' + e.target.value)
    // }

function onChange() {
    // El botón enviar sólo debe estar habilitado si se han marcado los 2 checks
    if (document.main_form.elements.condiciones.checked == false || document.main_form.elements.privacidad.checked == false) {
        document.main_form.elements.submit.disabled = true
    } else {
        document.main_form.elements.submit.disabled = false
    }

    // El combo de opciones sólo estará habilitado si se pulsa “si” en el primer check
    if (document.main_form.elements.pregunta_si.checked == true) {
        document.main_form.elements.opciones.disabled = false
    } else if (document.main_form.elements.pregunta_no.checked == true || document.main_form.elements.pregunta_nsnc.checked == true) {
        document.main_form.elements.opciones.disabled = true
    }
}

function onClick() {
    //console.log('on click!!!')
    // console.log(`name: ${document.main_form.elements.name.value}`)
    // console.log(`condiciones? ${document.main_form.elements.condiciones.checked}`)
    // if (document.main_form.elements.name.value !== 'admin') {
    //     alert('usuario incorrecto')
    // }


    // Nombre y apellidos son obligatorios. Si no se han rellenado al pulsar el botón, informar al usuario
    if (document.main_form.elements.name.value == '' && document.main_form.elements.surname.value == '') {
        alert('¡Nombre y apellidos obligatorios!')
    } else if (document.main_form.elements.name.value == '') {
        alert('¡Nombre obligatorio!')
    } else if (document.main_form.elements.surname.value == '') {
        alert('¡Apellidos obligatorios!')
    }

    // El tamaño máximo de la descripción es de 80 carácteres
    if (document.main_form.elements.description.value.length > 80) {
        alert('¡Tamaño máximo de 80 caracteres!')
    }
    return false
}

// Implementar algún mecanismo para prevenir el doble submit
function doubleClick() {
    alert('¡Despacio! ')
}