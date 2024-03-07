export default async function handler(req, res) {
    const url = "https://pokeapi.co/api/v2/evolution-chain/";
    const url2 = "https://pokeapi.co/api/v2/pokemon-species/";
    try {
        const name = req.query.name;
        if (!name || name === "") {
            res.status(400).json({error : "Pokemon name is required"})
        }
        if (req.method == "GET") {
            const callURL = url2 + name;
            const response = await fetch(callURL);
            const data = await response.json();
            
            const callURL2 = data.evolution_chain.url;
            const response2 = await fetch(callURL2);
            const data2 = await response2.json();
            if (data2.chain.evolves_to.length === 0) {
                res.status(200).json({"pokemonName" : name})
                return;
            }



            if (data2.chain.evolves_to[0].evolves_to[0].length !== 0) {
                if (name === data2.chain.evolves_to[0].evolves_to[0].species.name) {
                    const newdata = {"pokemonName" : name }
                    res.status(200).json(newdata)
                } else {
                    const newdata = {"pokemonName" : data2.chain.evolves_to[0].species.name }
                    res.status(200).json(newdata)
                }
            } else {
                const newdata = {"pokemonName" : data2.chain.evolves_to[0].species.name }
                res.status(200).json(newdata)
            }



            
            
        } 
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}