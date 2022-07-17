// Write your helper functions here!
require('isomorphic-fetch');

//function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
  
   //document.getElementById("missionTarget").innerHTML = 
              //  <><h2>Mission Destination</h2>
      // <ol>
         //  <li>Name: ${json[index].name}</li>
          // <li>Diameter: ${json[index].diameter}</li>
           //<li>Star: ${star}</li>
           //<li>Distance from Earth: ${json[index].distance}</li>
           //<li>Number of Moons: ${json[index].moons}</li>
      // </ol><img src="Moon_image.jpeg">

    

              // function validateInput(testInput)

               //function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)

              // async function myFetch() {let} planetsReturned;

              // planetsReturned = await fetch().then(function(response) );

              // return planetsReturned;
       // }

              // function pickPlanet(planets)

              // module.exports.addDestinationInfo = addDestinationInfo;
              // module.exports.validateInput = validateInput;
              // module.exports.formSubmission = formSubmission;
              // module.exports.pickPlanet = pickPlanet;
              // module.exports.myFetch = myFetch;
          // </>

    <!DOCTYPE html>
    <html>
    <head>
        <title>Launch Checklist</title>
        <link rel = "stylesheet" type = "text/css" href = "styles.css" />
        <script src = "script.js"></script>
    </head>
    <body>
        <h1>Launch Checklist Form</h1>
        <div id="missionTarget">

           //Fetch some planetary data
           
        </div>
        <div id="launchForm">
            <form>
                <div style="display:flex; flex-direction: row; justify-content: center; align-items: center; margin: 8 0;">
                    <label>Pilot Name <input type="text" name="pilotName" id="pilotName"/></label>
                </div>
                <div style="display:flex; flex-direction: row; justify-content: center; align-items: center; margin: 8 0;">
                    <label>Co-pilot Name <input type="text" name="copilotName"/></label>
                </div>
                <div style="display:flex; flex-direction: row; justify-content: center; align-items: center; margin: 8 0;">
                    <label>Fuel Level (gal) <input type="text" name="fuelLevel"/></label>
                </div>
                <div style="display:flex; flex-direction: row; justify-content: center; align-items: center; margin: 8 0;">
                    <label>Cargo Weight (lbs) <input type="text" name="cargoWeight"/></label>
                </div>
                <button id="formSubmit">Submit</button>
            </form>
        </div>
        <div id="launchStatusCheck">
            <h2 id="launchStatus">Awaiting Information Before Launch</h2>
            <div  id="faultyItems">
                <ol>
                    <li id="pilotStatus">Pilot Ready</li>
                    <li id="copilotStatus">Co-pilot Ready</li>
                    <li id="fuelStatus">Fuel level high enough for launch</li>
                    <li id="cargoStatus">Cargo weight low enough for launch</li>
                </ol>
            </div>
        </div>   
    </body>
</html>
