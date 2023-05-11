const popup = document.querySelector('.popup');
const close = document.querySelector('.close');
 window.onload = function () {
    setTimeout(function(){
        popup.style.display = "block";
    },2000)
 }
 close.addEventListener('click', () => {
    popup.style.display = "none";
 })
// dark light mode button code
 function changeMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
 //js query//
 
      //   var x = document.getElementById('output');
        
      //   function getLocation(){
      //       if(navigator.geolocation){
      //           navigator.geolocation.getCurrentPosition(showPosition);
      //       }else{
      //           x.innerHTML= "borwer not support"
            
      //       }}
      //       function showPosition(position){
      //           x.innerHTML = "latitude = "+position.coords.latitude;
      //           x.innerHTML += "<br/>"
      //           x.innerHTML += "longitude = "+position.coords.longitude;
      //       }
      let x = document.getElementById('out');
      let y = document.getElementById('weather');
      function geolocation(){
          if(navigator.geolocation){
              navigator.geolocation.getCurrentPosition(showPosition)
          }else{
              x.innerText="Geo Not Supported"
          }
      }

      function showPosition(data){
          console.log(data)
          let lat = data.coords.latitude
          let lon = data.coords.longitude
          x.innerText = `Latitude is ${lat} and longitude is ${lon}`
          const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
          //api calling
          fetch(url,{method: 'GET'})
          //return promise
          .then((res) =>res.json())
          //resolve the promise
          .then((data) => {
              console.log(data)
              let cityName = data.city.name;
              let temp = data.list[0].temp.day+" °C"
              y.innerText = `Weather of ${cityName} is ${temp}`
          })
      }