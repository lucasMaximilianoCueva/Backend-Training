const socket = io();

socket.on('Message', data => {
    console.log(data);
    socket.emit('Notification', 'Message received successfully');
});