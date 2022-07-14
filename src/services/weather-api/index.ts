interface WeatherAPIProps {
    getCoordinates: Function
    getCurrentWeather: Function
    getCityWeather: Function
}

const APIKey = process.env.REACT_APP_WEATHER_API

const WeatherAPI: WeatherAPIProps = {
    async getCoordinates(city: String) {
        try {

            let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${APIKey}`);
            let [ firstResult ] = await response.json();
            let { lat, lon } = firstResult;

            return { lat, lon }
            
        } catch (err) {
            console.log(err)
        }
        
    },
    async getCurrentWeather(lat: Number, lon: Number) {
        try {
            
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKey}`);
            let result = await response.json();

            return result;

        } catch (err) {
            console.log(err)
        }

    },
    async getCityWeather(city: String) {
        let { lat, lon } = await this.getCoordinates(city);
        let weather = await this.getCurrentWeather(lat, lon)

        return weather
    }
}

export default WeatherAPI