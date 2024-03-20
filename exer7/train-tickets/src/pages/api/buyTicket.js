import { ObjectId } from "mongodb";
import createTicket from "../../../server/mongodb/actions/createTicket";
import Ticket from "../../../server/mongodb/models/Ticket";

export default async function handler(req, res)  {
    try {
        if (req.method == 'POST') {
            const createticket = await createTicket(req.query);
            if (createticket) {
                res.status(200).send("Success")
            } else {
                res.status(500).send("Failed")
            }
        }
    } catch (error) {
        res.status(500).send("Failed")
    }
}