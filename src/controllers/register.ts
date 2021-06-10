import { Request, Response } from "express";
import scrubPayload from "../__dataSchemas__/scrubPayload"
import register from "../auth/register"

const RegisterController = async (req:Request, res: Response) => {

    try {
        
        const payload = req.body

        scrubPayload(payload, "register")

        const { status, body } = await register(payload);

        if (status && body) { res.status(status).send(body)} 

    } catch (error) {
        console.log("Error: ", error)
        res.status(404).send(error)
   }
};  

export default RegisterController;

