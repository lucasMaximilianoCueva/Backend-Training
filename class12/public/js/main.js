const socket = io.connect();

document.getElementById('miBoton').addEventListener('click', () => {
  socket.emit('boton')
})

let productosTemplate

socket.on('productos', async (productos) => {
  if (!productosTemplate) {
    const archivo = await fetch('plantillas/tabla.hbs')
    const templateText = await archivo.text()
    productosTemplate = Handlebars.compile(templateText);
  }
  const tablaHtml = productosTemplate({ productos });
  document.getElementById('productos').innerHTML = tablaHtml
})