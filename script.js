document.getElementById("form-tarjeta").addEventListener("submit", function (event) {
event.preventDefault();

const titulo = document.getElementById("titulo-tarjeta").value; 
const descripcion = document.getElementById("descripcion-tarjeta").value;
const solucion  = document.getElementById("solucion-tarjeta").value;
const arreglo  = document.getElementById("arreglo-tarjeta").value;
const selectlist = document.getElementById("opcion-seleccion").value;
const fondo = document.getElementById("fondo-tarjeta").value;
const borde = document.getElementById("borde-tarjeta").value;

console.log({
    titulo,
    descripcion,
    solucion,
    selectlist,
    fondo,
    borde,
})

const conteinertarjetas = document.getElementById("conteiner-tarjetas")
const nuevatarjeta = document.createElement("div")

nuevatarjeta.className = "tarjeta";
nuevatarjeta.style.backgroundColor = fondo;
nuevatarjeta.style.borderColor = borde;

nuevatarjeta.innerHTML = `
<div class="conteiner-tarjeta">
    <p class="texto">Cliente: ${titulo}</p>
    <p class="texto">¿Qué sucedía con tu equipo? ${descripcion}</p>
    <p class="texto">¿Tuviste una solución? ${solucion}</p>
    <p class="texto">¿Que le hicieron a tu equipo? ${arreglo}</p>
    <p class="texto">Calidad del Servicio: ${selectlist}</p>
</div>
`;
conteinertarjetas.appendChild(nuevatarjeta);
document.getElementById("form-tarjeta").reset();
});