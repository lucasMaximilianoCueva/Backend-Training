const socket = io.connect();

socket.on('Message', data => {
    console.log(data);
    socket.emit('Notification', 'Message received successfully');
});