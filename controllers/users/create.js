//import createHttpError from "http-errors";
import User from '../../models/User.js'

let create = async(req,res,next) => {
    try {
        let one = await new User(req.body)
        await one.save()
        return res.status(201).json({
            user:one,
            succes:true
        })
    } catch (error) {
        next (error)
    }

}

export default create