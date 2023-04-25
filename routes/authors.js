// aca voy a definir los endpoints de los autores
// y los voy a exportar para poder utilizarlos en el enrutador principal

/* 
definiremos las rutas necesarias para manejar: 
la creación
la lectura 
la actualización 
la eliminación de documentos de la base de datos utilizando los métodos HTTP que correspondan*/


import { Router } from 'express'
import read from '../controllers/authors/read.js'
let router = Router()

//router.post('/',(req,res,next)=> res.status(200).send('autor creado'))
router.get('/', read)
//router.put('/:id',(req,res,next)=> res.status(200).send('autor modificado'))
//router.delete('/:id',(req,res,next)=> res.status(200).send('autor eliminado'))

export default router