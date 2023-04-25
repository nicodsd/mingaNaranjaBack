// aca voy a definir los endpoints de los autores
// y los voy a exportar para poder utilizarlos en el enrutador principal

/* 
definiremos las rutas necesarias para manejar: 
la creación
la lectura 
la actualización 
la eliminación de documentos de la base de datos utilizando los métodos HTTP que correspondan*/

import read from '../controllers/categories/read.js'
import { Router } from "express";
let router = Router()

router.get('/',read)

export default router