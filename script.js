let x = document.getElementById("demo");
let map = document.getElementById("map")
let btn = document.getElementById("btn")
let btn1 = document.getElementById("btn1")



const lat = localStorage.getItem('lat');
const long = localStorage.getItem('long');
if(lat){
    console.log('Data is found');
    btn.classList.add("btncolor")
    x.innerHTML = "Latitude: " + lat + "<br>Longitude: " + long;
    map.innerHTML = `<iframe src="https://maps.google.com/maps?q=${lat}, ${long}&z=15&output=embed" width="360" height="270" frameborder="0" style="border:0"></iframe>`
}else{
    console.log('Data is not found');
    btn.disabled = false
    



function getLocation(){
    
    btn.classList.add("btncolor")
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }
    else{
        x.innerHTML = "Geolocation is not supported by this browser."
    }
}

function showPosition(position){
    x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude; 
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude 
    console.log(latitude);
    console.log(longitude);
    localStorage.setItem("lat", position.coords.latitude)
    localStorage.setItem("long", position.coords.longitude)
    map.innerHTML = `<iframe src="https://maps.google.com/maps?q=${latitude}, ${longitude}&z=15&output=embed" width="360" height="270" frameborder="0" style="border:0"></iframe>`
}


}


function removeLocation(){
    localStorage.clear()
    btn.classList.remove("btncolor")
    btn1.classList.add("btncolor")
    location.reload()
}


