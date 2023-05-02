import joi from "joi"

export const userCreateSignIn = joi.object({
    mail: joi.string().email({minDomainSegments:2}).required(),
    password: joi.string().min(8).max(25).required(),
    photo: joi.string().uri()
})

