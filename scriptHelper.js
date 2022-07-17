// Write your helper functions here!
('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
  
   //document.getElementById("missionTarget").innerHTML = 
  <><h2>Mission Destination</h2>
       <ol>
           <li>Name: ${json[index].name}</li>
           <li>Diameter: ${json[index].diameter}</li>
           <li>Star: ${star}</li>
           <li>Distance from Earth: ${json[index].distance}</li>
           <li>Number of Moons: ${json[index].moons}</li>
       </ol>
            <img src="Moon_image.jpeg">

    

              // function validateInput(testInput)

        <script>
                window.addEventListener("load", function() {
                let form = document.querySelector("form");
                form.addEventListener("submit", function(event) {
                    alert("submit clicked");
                 });
            });
        </script>

               //function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)

        <form method="POST" action="">
            <label>Pilot <input type="text" name="pilotName"></label>
            <label>Co-Pilot <input type="text" name="copilotName"></label>
            <label>Fuel Level <input type="number" name="fuelLevel"></label>
            <label>Cargo Mass <input type="number" name="cargoWeight"></label>
               
        </form>
                <button id="update">Submit</button> 

              // async function myFetch() {let} planetsReturned;

              // planetsReturned = await fetch().then(function(response) );

              planetsReturned = [];
                let key = 0;
                let index = 0;
                for (json[key].index in json) {

                 planet = [
                    json[key].name,
                    json[key].diameter,
                    json[key].star,
                    json[key].distance,
                    json[key].moons,
                    json[key].imageUrl
                ]
                     planetsReturned[key] = planet;

                    return planet;
                    key = (key + 1) % json.length;
             }             
    });
              return planetsReturned;
                
       // }

              // function pickPlanet(planets)

              // module.exports.addDestinationInfo = addDestinationInfo;
              // module.exports.validateInput = validateInput;
              // module.exports.formSubmission = formSubmission;
              // module.exports.pickPlanet = pickPlanet;
              // module.exports.myFetch = myFetch;
          // </>

    