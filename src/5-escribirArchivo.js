const fs = require('fs')

const textoNuevo = `\n *Nuevas canciones* \n 4-Skillet - Legendary\n 5-Linkin Park - One Step Closer\n 6-System of a Down - BYOB`

try{
    fs.appendFileSync('./canciones.txt', textoNuevo, 'utf-8');
    console.info('Archivo actualizado ✔✅')
}catch(error){
    console.error('ocurrio un error al escribir en el archivo: ',error)
}