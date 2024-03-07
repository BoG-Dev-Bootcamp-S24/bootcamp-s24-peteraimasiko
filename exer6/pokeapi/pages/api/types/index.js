export default async function handler(req, res) {
    res.status(400).json({error : "Type name is required." })
  }