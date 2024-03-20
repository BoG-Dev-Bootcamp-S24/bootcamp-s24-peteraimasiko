
export default async function handler(req, res) {
    
    const url = "https://pokeapi.co/api/v2/pokemon/";
    try {
        const name = req.query.name;
        if (!name || name === "") {
            res.status(400).json({error : "Pokemon name is required"})
        }
        if (req.method == "GET") {
            const callURL = url + name;
            const response = await fetch(callURL);
            const data = await response.json();
            const types = []
            data.types.forEach(element => {
                types.push(element.type.name);  
            })
            const newdata = {"pokemonName" : data.forms[0].name, "sprite" : data.sprites.front_default, "types" : types }
            res.status(200).json(newdata)
        } 
    } catch (error) {
        res.status(500).json({error : error.message})
    }
    
}