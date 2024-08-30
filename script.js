document.addEventListener('DOMContentLoaded', function() {
    // API key for OpenWeatherMap (replace with your own)
    const apiKey = 'YOUR_API_KEY';
    const city = 'London'; // Change to your desired city
  
    // Function to fetch weather data
    async function fetchWeather() {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        const temperature = data.main.temp;
        document.querySelector('.weather-temp').textContent = `${temperature}°C`;
        document.querySelector('.weather-description').textContent = data.weather[0].description;
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
  
    // Function to update live time
    function updateTime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      document.querySelector('.time').textContent = `${hours}:${minutes}${ampm}`;
    }
  
    // Function to simulate battery percentage
    function updateBattery() {
      const batteryPercentage = Math.floor(Math.random() * 100);
      document.querySelector('.buttery i').textContent = `${batteryPercentage}%`;
    }
  
    // Initial calls
    fetchWeather();
    updateTime();
    updateBattery();
  
    // Update time every minute
    setInterval(updateTime, 60000);
  
    // Update battery percentage every 30 seconds
    setInterval(updateBattery, 30000);
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    // API key for OpenWeatherMap (replace with your own)
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const city = 'London'; // Replace with the desired city
  
    // Function to fetch weather data
    async function fetchWeather() {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        if (data.cod === 200) {
          const temperature = data.main.temp;
          const description = data.weather[0].description;
          document.querySelector('.weather-temp').textContent = `${temperature.toFixed(1)}°C`;
          document.querySelector('.weather-description').textContent = description.charAt(0).toUpperCase() + description.slice(1);
        } else {
          console.error('Error fetching weather data:', data.message);
          document.querySelector('.weather-temp').textContent = 'N/A';
          document.querySelector('.weather-description').textContent = 'N/A';
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
        document.querySelector('.weather-temp').textContent = 'N/A';
        document.querySelector('.weather-description').textContent = 'N/A';
      }
    }
  
    // Initial call to fetch weather
    fetchWeather();
  
    // Update weather every 10 minutes
    setInterval(fetchWeather, 600000); // 600000 milliseconds = 10 minutes
  });
  