const express= require('express');

const app= express ();

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

console.log(__dirname);

app.get('/', (req, res) => {
res.sendFile(__dirname + '/views/home.html')
});
