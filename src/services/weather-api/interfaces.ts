interface WeatherItem {
    id: Number
    main: String
    description: String
    icon: String
}
export interface Weather {
    coord: {
      lon: Number
      lat: Number
    };
    weather: [WeatherItem]
    base: String
    main: {
      temp: Number
      feels_like: Number
      temp_min: Number
      temp_max: Number
      pressure: Number
      humidity: Number
    }
    visibility: Number
    wind: {
      speed: Number
      deg: Number
    }
    clouds: {
      all: Number
    }
    dt: number
    sys: {
      type: Number
      id: Number
      message: Number
      country: String
      sunrise: Number
      sunset: Number
    }
    timezone: Number
    id: Number
    name: String
    cod: Number
}