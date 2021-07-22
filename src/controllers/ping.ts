import { Request, Response } from "express";

const Ping = (req:Request, res: Response) => {
    const currentdate = new Date();
    const datetime = "Pinged at: " + currentdate.getDate() + "/" +
        (currentdate.getMonth() + 1) + "/" +
        currentdate.getFullYear() + " @ " +
        currentdate.getHours() + ":" +
        currentdate.getMinutes() + ":" +
        currentdate.getSeconds();

        const body = {
        message: "Pinged! Response from IDAM Node.js api v1",
        date: datetime,
        status: 200,
        };

        res.send(JSON.stringify(body))
};  

export default Ping;
