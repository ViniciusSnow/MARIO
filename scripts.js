const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")


function mostrarform() {
 form.style.left = "50%"
 form.style.transform = "tramslateX (-50%)"
mascara.style.visibility = "visible"
}

function esconderform() {
form.style.left ="-300px"
form.style.transform = "tramslateX (0)"
mascara.style.visibility = "hidden"
}

