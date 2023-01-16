// api link https://geo.ipify.org/api/v2/country?apiKey=at_3ryarp1E4bnxgqbuj6tZioZMa5yc8&ipAddress=8.8.8.8


function getlocation(){
const locaterApi = fetch('https://geo.ipify.org/api/v2/country?apiKey=at_3ryarp1E4bnxgqbuj6tZioZMa5yc8&ipAddress=8.8.8.8')
.then(response => response.json())
.then((data) => {
    return data
});

const myLocation = () => {
    locaterApi.then((e) =>{
        console.log('object is ',e);
        console.log('my ip is',e.ip);
        console.log('country is',e.location["country"]);
    })
};
myLocation();

};

getlocation();