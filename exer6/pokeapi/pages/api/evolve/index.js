export default async function handler(req, res) {
    res.status(400).json({error : "Pokemon name is required." })
}