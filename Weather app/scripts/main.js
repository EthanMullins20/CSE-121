/* weather */

    navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const apiKey = '<4def50accbd787e425567d862bd5108f>';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;




console.log(lat);


link = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=4def50accbd787e425567d862bd5108f`;
const request = new XMLHttpRequest();


request.open("GET", link, true);


request.onload = function () {
    const obj = JSON.parse(this.response);
    console.log(obj);
    document.querySelector("#weather").innerHTML = obj.weather[0].description;
    document.getElementById("location").innerHTML = obj.name;
    document.getElementById("temp").innerHTML = Math.round(obj.main.temp - 236);
    document.getElementById("icon").src = "http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";
    if (request.status >= 200 && request.status < 400) {
        var temp = obj.main.temp;
    }
    else {
        console.log("The city doesn't exist! Check Again.");
 }
}
request.send();
/*Page Reload*/
const refresh = document.querySelector(".refresh");
refresh.addEventListener('click', () => {
 window.location.reload()
 //history.go(0);
})

    })



    
