//ejemplo de módulo fs
const fs = require('fs')
const colors = require('colors')

//import fs from 'fs'

try{
    const data = fs.readFileSync('./canciones.txt','utf-8')
    console.log(data)
}catch(error){
    console.error(`${'ocurrio un error al leer el archivo:'.bgRed.white} \n ${error}`)
}