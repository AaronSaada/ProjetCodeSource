import * as Joi from 'joi'
import { createValidator } from 'express-joi-validation'
import { Router } from "express";
import { userRepository } from "./userRepository";

export const userController = Router()

const validator = createValidator()

const querySchema = Joi.object({
  login: Joi.string().required(),
  password: Joi.string().required(),
  role: Joi.string()
})

const getSchema = Joi.object({
    id: Joi.number().required()
})

userController.get('/' , async (req, res) => {
    
    if(req.body.role == "admin"){
        res.send(await userRepository.find())
    } else{
        res.send("Vous n'avez pas les droits pour effectuer cette action.")
    }
    
})

userController.post('/', validator.body(querySchema), async (req, res) => {

    try{
        res.send(await userRepository.save({
            login: req.body.login,
            password: req.body.password,
            role: req.body.role
        }));
    } catch(error: any){
        res.status(400).send({err: "L'utilisateur existe déjà", error : error.message, detail: error.details})
    }
    
})

userController.get('/:id', validator.params(getSchema), async (req, res) => {

    res.send(await userRepository.findOneBy({
        id:Number(req.params.id),
    }))

})
