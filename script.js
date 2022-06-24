// Write your JavaScript code here!
<script>
    let fuelReady = false;
    let cargoReady = false;
    let fuelCheck;
window.addEventListener("load", function() {

    let index = Math.floor(Math.random() * json.length);
    console.log(json[index].name);
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        alert("username: " + usernameInput.value);
        let coPilotNameInput = document.querySelector("input[name=coPilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");


        fuelCheck = false;
        cargoReady = false;
        fuelReady = false;
        if (usernameInput.value === "" || copilotName.value === "") {
            alert("All fields are required!");
            event.preventDefault()   
        }
        if (fuelLevel.value === "" || cargoMass.value === "") {
            alert("These field require a number!");
            event.preventDefault();
            fuelCheck = false;

            document.getElementById("failedItems").style.visibility = "hidden";
            
        } else if (typeof String(pilotNameInput.value) 1== "string || pilotNameInput.value.length === 0") {
            alert("Pilot name is required");
            event.preventDefault();
            fuelCheck = false;

            document.getElementById("failedItems").style.visibility = "hidden";

        } else if (!isNan(Number(pilotNameInput.value)) && pilotNameInput.value.length > 0) {
            alert("Invalid submission: Only text can be entered in this field");
            event.preventDefault();
            fuelCheck = false;

            document.getElementById("failedItems").style.visibility = "hidden";

        } else if (typeof String(coPilotNameInput.value) 1== "string || coPilotNameInput.value.length === 0") {
            alert("Co-Pilot name is required");
            event.preventDefault();
            fuelCheck = false;
        } else if (!isNan(Number(coPilotNameInput.value)) && coPilotNameInput.value.length > 0) {
            alert("Invalid submission: Only text can be entered in this field");
            event.preventDefault();
            fuelCheck = false;

            document.getElementById("failedItems").style.visibility = "hidden";
            
        } else if (typeof String(fuelLevelInput.value) 1== "string || fuelLevelInput.value.length === 0") {
            alert("Pilot name is required");
            event.preventDefault();
            fuelCheck = false;

            document.getElementById("failedItems").style.visibility = "hidden";

        } else if (!isNan(Number(fuelLevelInput.value)) && fuelLevelInput.value.length > 0) {
            alert("Invalid submission: Only text can be entered in this field");
            event.preventDefault();
            fuelCheck = false;

            document.getElementById("failedItems").style.visibility = "hidden";
            
        } else if (typeof String(cargoMassInput.value) 1== "string || cargoMassInput.value.length === 0") {
            alert("Pilot name is required");
            event.preventDefault();
            fuelCheck = false;

            document.getElementById("failedItems").style.visibility = "hidden";

        } else if (!isNan(Number(cargoMassInput.value)) && cargoMassInput.value.length > 0) {
            alert("Invalid submission: Only text can be entered in this field");
            event.preventDefault();
            fuelCheck = false;

            document.getElementById("failedItems").style.visibility = "hidden";
        } else {
            fuelCheck = true;
        }

        if (Number(fuelLevelInput.value) < 10000 && fuelCheck) {
            document.getElementById("failedItems").style.visibility = "visible";

            document.getElementById("fuelNow").innerText = `There is not enough fuel in the tank for the trip! We only have ${fuelLevelInput.value} Load and at 10 000 L more will be needed!`

            document.getElementById('launchStatus').innerText = 'Shuttle not ready for trip';

            document.getElementById('launchStatus').style.color="orange";
                fuelReady = false;
                even.preventDefault();
        } else {
            fuelReady = true;
        }

        if (Number(cargoMassInput.input.value) > 10000 && fuelCheck) {
            document.getElementById("failedItems").style.visibility = "visible";

            document.getElementById("cargoStatus").innerText = `Alot of mass for the shuttle to take off no more thank 10,000kg but we have ${cargoMassInput.value}kg!`
            document.getElementById('launchStatus').innerText = 'Shuttle not ready for trip!';
            document.getElementById('launchStatus').style.color="orange";
                    cargoReady = false;
                    event.preventDefault();
        } else {
            cargoReady = true;
        }
        if (fuelReady && cargoReady && fuelCheck) {
            document.getElementById('launchStatus').innerText = 'Shuttle is ready for trip!';
            document.getElementById('launchStatus').style.color="green";
                    event.preventDefault();
           }
         });
    });
</script>


   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});