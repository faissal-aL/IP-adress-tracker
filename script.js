// api link https://geo.ipify.org/api/v2/country?apiKey=at_3ryarp1E4bnxgqbuj6tZioZMa5yc8&ipAddress=8.8.8.8
//  https://api64.ipify.org?format=json
//  https://geo.ipify.org/api/v2/country?apiKey=at_3ryarp1E4bnxgqbuj6tZioZMa5yc8

const ipAdress = document.getElementById("ipadress");
const locationAdress = document.getElementById("location");
const timeZone = document.getElementById("timezone");
const isp = document.getElementById("isp");
const customIp = document.getElementById("custom-ip");
const searchButton = document.getElementById("search-button");
const mapContainer = document.getElementById("premap");

function buttonFunction(){
    console.log('button is clicked and value is',customIp.value);
    let parameterip = '&ipAddress='+customIp.value;
    console.log(parameterip);
    console.log('map exist ?',map != null);
    map = map.remove();
    const mappa = document.createElement("div");
    mappa.id = "map";
    mapContainer.append(mappa);
    getlocation(parameterip);
};

searchButton.addEventListener("click",buttonFunction);

//  function that fetches API and calls the write infos and display map functions
function getlocation(ipcustom=''){
    //fetch map api
//const adress = '&ipAddress='+ip;
const urlApi = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_3ryarp1E4bnxgqbuj6tZioZMa5yc8'+ipcustom;
const locaterApi = fetch(urlApi)
.then(response => response.json())
.then((data) => {
    return data
});

const myLocation = () => {
    locaterApi.then((e) =>{
        writeCoordinates(e);
        myPosition(e);       
        console.log('object is ',e);
    });
};
myLocation();
};

getlocation();


//  function that writes the informations on the contianer
function writeCoordinates(e){
        ipAdress.innerHTML = e.ip;
        locationAdress.innerHTML = e.location["country"] + " " + e.location["city"] + " " + e.location["postalCode"];
        timeZone.innerHTML = 'UTC ' + e.location["timezone"];
        isp.innerHTML = e.isp;
}

// function to draw the map and the cercle of position on the map
function myPosition(e){
    
    let lattitude,longitude;
    lattitude = e.location["lat"];
    longitude = e.location["lng"];

    let map =new L.map('map').setView([lattitude,longitude], 10);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

   /*  L.circle([lattitude, longitude], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map); */
    L.marker([lattitude, longitude]).addTo(map);
}