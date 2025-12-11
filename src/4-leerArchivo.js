//ejemplo de módulo fs
const fs = require('fs')
//import fs from 'fs'

try{
    const data = fs.readFileSync('./canciones.txt','utf-8')
    console.log(data)
}catch(error){
    console.error('ocurrio un error al leer el archivo: ',error)
}