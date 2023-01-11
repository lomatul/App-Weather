
let weather={
  "apikey":"9f6aaa39d4bcb22d4ec3c0e9661d7a2e",
  fetchWeather: function(city){
 fetch(
  "https://api.openweathermap.org/data/2.5/weather?q="
   + city
    + "&units=metric&appid="
    + this.apikey
 ).then((Response)=>Response.json())
 .then((data)=> this.displayWaether(data));
  },
  displayWaether:function(data){
    const {name}= data;
    const {icon, description }= data.weather[0];
    const {temp, humidity}= data.main;
    const {speed}=data.wind;
    document.querySelector(" .city").innerText = "Weather in "+ name;
    document.querySelector(" .icon").src="https://openweathermap.org/img/wn/"+ icon +".png";
    document.querySelector(" .description").innerText= description ;
    document.querySelector(" .temp").innerText= temp +"°C";
    document.querySelector(" .humidity").innerText= "humidity : "+humidity +"%";
    document.querySelector(" .wind").innerText= " Wind speed : "+speed+"km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+ name + "/landscape')";
  },

  Search: function(){
    this.fetchWeather(document.querySelector(".search-bar").value);
  }
  };

  document.querySelector(".search button").addEventListener("click",function(){
 weather.Search();
  });

  document.querySelector(".search-bar").addEventListener("keyup",function(event){
if(event.key=="Enter"){
  weather.Search();
}
  })

  weather.fetchWeather("Denvar");