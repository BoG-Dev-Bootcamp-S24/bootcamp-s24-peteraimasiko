
export default async function handler(req, res) {
    const url = "https://pokeapi.co/api/v2/pokemon/";

    if (req.method == "GET") {
        const num = Math.floor(Math.random() * (1025)) + 1;
        const callURL = url + num;
        const response = await fetch(callURL);
        const data = await response.json();
        const types = []
        data.types.forEach(element => {
            types.push(element.type.name);  
        })
        const newdata = {"pokemonName" : data.forms[0].name, "sprite" : data.sprites.front_default, "types" : types }
        res.status(200).json(newdata)
    }
}