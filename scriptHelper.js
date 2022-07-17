// Write your helper functions here!
import 'isomorphic-fetch';
<><style>
    function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
        // Here is the HTML formatting for our mission target div.
        document.getElementById("missionTarget").innerHTML = Destination()};

    }
</style>
<><h2><b>Mission Destination</b></h2>
        <ol type="1">
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
                let pilotNameInput = document.querySelector("input[name=pilotName]");
                let coPilotNameInput = document.querySelector("input[name=copilotName]");
                let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
                let cargoMassInput = document.querySelector("input[name=cargoWeight]");
                if (pilotNameInput.value === "" || copilotNameInput.value === "") 
                if (fuelLevelInput.value === "" || cargoMassInput.value === "")

                {alert("All Field are required")};
            
                // stop the form submission
                event.preventDefault();
                
              });
            });
            </script>



               //function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)

            <form method="POST" action="https://handlers.education.launchcode.org/static/planets.json">
                <label>Pilot <input type="text" name="pilotName"></label>
                <label>Co-Pilot <input type="date" name="copilotName"></label>
                <label>Fuel Level <input type="number" name="fuelLevel"></label>
                <label>Cargo Mass <input type="number" name="cargoWeight"></label>
            </form>
            <button id="update">Run Simulation</button>
            <div id="launchStatusCheck">
                <h2 id="launchStatus">Awaiting Information Before Launch</h2>
                <div id="faultyItems">
                    <ol>
                        <li id="pilotStatus">Pilot Ready</li>
                        <li id="copilotStatus">Co-pilot Ready</li>
                        <li id="fuelStatus">Fuel level high enough for launch</li>
                        <li id="cargoStatus">Cargo weight low enough for launch</li>
                    </ol>
                </div>
            </div>


              // async function myFetch() {let} planetsReturned;

              // planetsReturned = await fetch().then(function(response) );

             //</img> planetsReturned = [];
               // let key = 0;
                //let index = 0;
                //for (json[key].index in json) {
            // planet = []
            // json[key].name,
            //json[key].diameter,
            //json[key].star,
            //json[key].distance,
            //json[key].moons,
            //json[key].imageUrl
            //]
            // planetsReturned[key] = planet;
            //return planet;
            // key = (key + 1) % json.length;
            // }             
            //});
            // return planetsReturned;
            //}


             function pickPlanet(planets) {
                {
                    name: "Tatooine",
                    diameter: "10465 km",
                    star: "Tatoo I & Tatoo II",
                    distance: "43000 light years from galactic core",
                    image: "https://www.nasa.gov/sites/default/files/images/587837main_Kepler16_transit_art2_full.jpg",
                    moons: 3
                    },

                {
                    name: "K2-18b",
                    diameter: "34500 km",
                    star: "K2-18",
                    distance: "110 light years from Earth",
                    image: "https://www.nasa.gov/sites/default/files/thumbnails/image/heic1916a.jpg",
                    moons: "unknown"
                 },
                 {
                    name: "Pern",
                    diameter: "measurement is under dispute",
                    star: "Alpha Sagittarius (a.k.a. Rukbat)",
                    distance: "Varies - find a library",
                    image: "https://www.nasa.gov/centers/langley/images/content/698148main_Brains_904_2.jpg",
                    moons: 2
                    },
            };

                var item = items[Math.floor(Math.random()*items.length)];

              // module.exports.addDestinationInfo = addDestinationInfo;
              // module.exports.validateInput = validateInput;
              // module.exports.formSubmission = formSubmission;
              // module.exports.pickPlanet = pickPlanet;
              // module.exports.myFetch = myFetch;
          // </>

    