const socket = io.connect();

document.getElementById('sendButton').addEventListener('click', (evt) => {
  socket.emit('btn')
})

let productsTemplate

socket.on('products', async (products) => {
  if (!productsTemplate) {
    const file = await fetch('templates/table.hbs')
    const templateText = await file.text()
    productsTemplate = Handlebars.compile(templateText);
    console.log(products);
  }
  const htmlTable = productsTemplate(products);
  document.getElementById('products').innerHTML = htmlTable
})
