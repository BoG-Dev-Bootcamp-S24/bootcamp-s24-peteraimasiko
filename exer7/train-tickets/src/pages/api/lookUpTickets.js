import readTicketsByUser from "../../../server/mongodb/actions/readTicketsByUser"

export default async function handler(req, res)  {

    try {
        if (req.method == 'GET') {
            const tickets = await readTicketsByUser(req.query);
            if (tickets) {
                if (tickets.length == 0) {
                    res.status(400).send("User has no tickets")

                } else if (tickets.length == 1 && tickets[0] == "nouser") {
                    res.status(400).send("User not found")
                } else {
                    res.status(200).json(tickets);
                }
                
            } else {
                res.status(500).send("Failed")
            }
        }
        
    } catch (error) {
        res.status(500).send("Failed")
    }


}