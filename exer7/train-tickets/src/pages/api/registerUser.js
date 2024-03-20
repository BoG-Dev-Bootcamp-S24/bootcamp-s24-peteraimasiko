import createUser from "../../../server/mongodb/actions/createUser"

export default async function handler(req, res)  {
    try {
        if (req.method == 'POST') {
            const user = await createUser(req.query)
            if (user) {
                res.status(200).send("Success")
            } else {
                res.status(500).send("Failure")
            }
        }
    } catch (error) {
        res.status(500).send("Failed")
    }
}