let inputNombre = document.getElementById("inputNombre");
let inputPregunta = document.getElementById("inputPregunta");
let btnRespuesta = document.getElementById("btnRespuesta");
let respuesta = document.getElementById("respuesta");
let respuestaImg = document.getElementById("respuestaImg");
let seccionInicio = document.getElementById("seccionInicio");
let seccionRespuestas = document.getElementById("seccionRespuestas");
let btnVolver = document.getElementById("btnVolver");


const obtenerDatos = async() => {
    try {
        const response = await fetch("https://yesno.wtf/api");
        const result = await response.json();
        console.log(result);
        return(result);
    } catch (error){
        console.log(error);
    }
};

//obtenerDatos();


btnRespuesta.addEventListener('click', async (event) =>  {
    event.preventDefault();

    if(inputPregunta.value === "" || inputNombre.value === ""){
        alert("Debes ingresar ambos datos!");
        return;
    }
    await respuestaSiNo();
});



//mostrar respuestas
const respuestaSiNo = async() => {
    try {
        let response = await obtenerDatos();
        let resp = response.answer;
        if (resp === "yes"){
            resp = "Si"
            console.log(resp);
        }
        respuesta.innerHTML = `Hola ${inputNombre.value}, tu respuesta es: <span class="respAnswer"> ${resp}<span>`;
        respuestaImg.src = response.image;

        seccionInicio.classList.add("ocultar");
        //seccionInicio.classList.remove("ocultar");
        seccionRespuestas.classList.remove("ocultar");
        seccionRespuestas.classList.add("mostrar");

        } catch (error) {
    }
};

//respuestaSiNo();

//btn volver a preguntar
btnVolver.addEventListener('click', () => {
    seccionRespuestas.classList.add("ocultar");
    seccionRespuestas.classList.remove("mostrar");
    seccionInicio.classList.remove("ocultar");

    inputNombre.value = "";
    inputPregunta.value = "";
});