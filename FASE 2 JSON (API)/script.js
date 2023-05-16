function crearFila(datos) {
    const fila = document.createElement('tr');
    const ciudad = document.createElement('td');
    
    // Eliminar "elTiempo.net |" del nombre de la ciudad
    const nombreCiudad = datos.title.replace("elTiempo.net | ", "");
    ciudad.textContent = nombreCiudad;
    
    const temperatura = document.createElement('td');
    temperatura.textContent = `${datos.temperatura_actual}°C`;
    const descripcion = document.createElement('td');
    descripcion.textContent = datos.stateSky.description;
    const viento = document.createElement('td');
    viento.textContent = `${datos.viento} km/h`;
    const humedad = document.createElement('td');
    humedad.textContent = `${datos.humedad} %`;
    fila.appendChild(ciudad);
    fila.appendChild(temperatura);
    fila.appendChild(descripcion);
    fila.appendChild(viento);
    fila.appendChild(humedad);
    return fila;
  }
  
  fetch("https://www.el-tiempo.net/api/json/v2/provincias/28/municipios/28015")
    .then(res => res.json())
    .then(data => {
      const weatherContainer = document.getElementById('tiempo.tabla');
      const fila = crearFila(data);
      weatherContainer.appendChild(fila);
    })
    .catch(err => console.error(err));
  