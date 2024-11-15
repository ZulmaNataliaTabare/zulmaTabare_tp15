


const movies = require('./peliculas');


movies.forEach(movie => {
    console.log(`ID: ${movie.id}`);
    console.log(`Título: ${movie.title}`);
    console.log(`Rating: ${movie.rating}`);
    console.log(`Awards: ${movie.awards}`);
    console.log(`Length: ${movie.length}`);
    console.log(`Price: ${movie.price}`);
    console.log(`Genre: ${movie.genre}`);
    console.log('-----------------------------');
});



const mensaje = './mensaje.txt';

const fs = require('fs');

fs.readFile(mensaje, 'utf-8', (error, texto) => {
    if (error) {
        console.error('Error al leer el archivo:', error);
        return;
    }
    console.log('Contenido del archivo:', texto);
});
