export default async function handler(req, res)  {
    const URL = "https://pokeapi.co/api/v2/pokemon/"
    try {
        if (req.method === 'POST') {
            const pokemon1 = req.query.pokemon1;
            const pokemon2 = req.query.pokemon2;
            if(!pokemon1 || pokemon2) {
                res.status(400).json({error : "name is required for both pokemon"});
            }
            const callURL1 = URL + pokemon1;
            const response1 = await fetch(callURL1);
            const data1 = await response1.json();
            const callURL2 = URL + pokemon2;
            const response2 = await fetch(callURL2);
            const data2 = await response2.json();
            let poke1stats = 0;
            let poke2stats = 0;
            data1.stats.forEach(element => {
                poke1stats += element.base_stat
            });
            data2.stats.forEach(element1 => {
                poke2stats += element1.base_stat
            });

            if (poke1stats > poke2stats) {
                return res.status(200).json({winner : pokemon1 + " is the winner!"})
            } else if (poke1stats < poke2stats) {
                return res.status(200).json({winner : pokemon2 + " is the winner!"})
            } else {
                return res.status(200).json({winner : "Both " + pokemon1 + " and " + pokemon2 + " tied"})
            }
        }
    } catch (error) {
        res.status(500).json({error : error.message})
    }
    

}