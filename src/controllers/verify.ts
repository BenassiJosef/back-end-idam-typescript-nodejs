import { Request, Response } from "express";
import scrubPayload from "../__dataSchemas__/scrubPayload"
import {registerVerify} from "../auth/verify"

const VerifyController = async (req:Request, res: Response) => {

    try {
        const payload = req.body

        scrubPayload(payload, "registerVerify")

        const { status, body } = await registerVerify(payload);

        if (status && body) { res.status(status).send(body)} 

    } catch (error) {
        console.log("Error: ", error)
        res.status(500).send(error)
   }
};  

export default VerifyController;