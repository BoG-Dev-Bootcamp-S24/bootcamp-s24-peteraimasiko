export default async function handler(req, res) {
    const url = "https://pokeapi.co/api/v2/type/";
    try {
        const type = req.query.type;
        if (!type) {
            res.status(400).json({error : "Pokemon type is required"})
        }
        if (req.method == "GET") {
            const callURL = url + type;
            const response = await fetch(callURL);
            const data = await response.json();
            const pokemon = []
            console.log(callURL);
            data.pokemon.forEach(element => {
                pokemon.push(element.pokemon.name);  
            })
            const newdata = {"pokemon" : pokemon}
            res.status(200).json(newdata)
        } 
    } catch (error) {
        res.status(500).json({error : error.message, "hello" : "hello"})
    }
}