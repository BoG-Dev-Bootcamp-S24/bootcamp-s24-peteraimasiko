// URL variables for the APIs

const ageResult = document.getElementById("ageResult");
const genderResult = document.getElementById("genderResult");
const nationalityResult = document.getElementById("nationalityResult");

document.getElementById('nameForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('nameInput').value;
  
    // Constructing API URLs
    //age-
    const agifyUrl = `https://api.agify.io?name=${name}`;
    //gender-
    const genderizeUrl = `https://api.genderize.io?name=${name}`;
    //nationality-
    const nationalizeUrl = `https://api.nationalize.io?name=${name}`;


    const fetchData = async (URL) => {
        const response = await fetch(URL)
        if (!response.ok) {
            throw new Error("Fetch response was not ok");
        }

        return await response.json();
    }

    try {
        let myarr = []

       

        myarr.push(fetchData(agifyUrl));
        myarr.push(fetchData(genderizeUrl));
        myarr.push(fetchData(nationalizeUrl));

        const mynewlist = await Promise.all(myarr);

        console.log(mynewlist)
        ageResult.innerHTML = `<p>Your age is probably ${mynewlist[0].age}.<p>`
        genderResult.innerHTML = `<p>Your gender is most likely ${mynewlist[1].gender}.<p>`
        nationalityResult.innerHTML = `<p>You are likely from this country ${mynewlist[2].country[0].country_id}<p>`
    } catch (error) {
        console.error("There was an error calling the API's")
        ageResult.innerHTML = `<p>L Bozo<p>`
        genderResult.innerHTML = `<p>L Bozo<p>`
        nationalityResult.innerHTML = `<p>L Bozo<p>`
    }


    // Students will write async code here to fetch data from the APIs
    // and update the DOM with the results.
    
    // They should use Promise.all to handle the multiple fetch requests.
    
    // Error handling should also be implemented.
});
