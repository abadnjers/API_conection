document.getElementById("button").addEventListener("click", () => {
  const muestra = document.getElementById("coordenadas");
  function acaEsta(x) {
    const lat = x.coords.latitude;
    const lon = x.coords.longitude;
    muestra.textContent = `Latitud: ${lat} °, Longitud: ${lon} °`;
  }
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(acaEsta);
  } else {
    muestra.textContent = "No se puede encontrar su ubicación, ¿tiene activado el GPS? "
  }});