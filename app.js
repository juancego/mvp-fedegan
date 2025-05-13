document.getElementById("fincaForm").addEventListener("submit", guardarFinca);

function guardarFinca(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombreFinca").value;
  const ubicacion = document.getElementById("ubicacion").value;
  const bovinos = parseInt(document.getElementById("bovinos").value || 0);
  const porcinos = parseInt(document.getElementById("porcinos").value || 0);

  const finca = {
    nombre: nombre,
    ubicacion: ubicacion,
    animales: {
      bovinos: bovinos,
      porcinos: porcinos
    },
    fecha: new Date().toISOString()
  };

  firebase.database().ref("fincas").push(finca);
  document.getElementById("fincaForm").reset();
}

firebase.database().ref("fincas").on("value", (snapshot) => {
  const lista = document.getElementById("listaFincas");
  lista.innerHTML = "";
  snapshot.forEach((child) => {
    const finca = child.val();
    const item = document.createElement("li");
    item.textContent = `${finca.nombre} (${finca.ubicacion}) - Bovinos: ${finca.animales.bovinos}, Porcinos: ${finca.animales.porcinos}`;
    lista.appendChild(item);
  });
});
