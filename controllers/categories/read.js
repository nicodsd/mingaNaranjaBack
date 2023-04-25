import Category from './../../models/Category.js'

let read = async (req, res, next) => {      //la funcion controladorea debe ser asicrona para poder esperar la respuesta de MONGO 
                                            //utilizo la sintaxis de try/catch para intentar algo y catchear los errores que puedan surgir
                                            //utilizo el metodo find() para buscar todos los recursos del metodo (que en este caso es CATEGORY) 
    try {                                   //configuro la respuesta que le tengo que enviar al cliente (FRONT)
        let all = await Category.find()
        
        return res.status(200)
            .json({
                categories: all
            })
    } catch (error) {
        console.log(error) 
        return res.status(400)
            .json({
                error: 'Ha ocurrido un error!'
            })
    }
}
export default read
