import { format } from 'date-fns';
import { FunctionComponent, useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import WeatherAPI from '../../services/weather-api';
import { Weather } from '../../services/weather-api/interfaces';

interface WeatherPageProps {
    
}

 
const WeatherPage: FunctionComponent<WeatherPageProps> = () => {
    const [searchParams] = useSearchParams();
    
    const [weather, setWeather] = useState<Weather | null>(null)

    

    useEffect(() => {
        const getCurrentWeather: Function = async () => {
            const city = searchParams.get("city");
            const weather = await WeatherAPI.getCityWeather(city);
    
            setWeather(weather);
        }

        getCurrentWeather().catch(console.error)
    }, [searchParams])

    return ( 
        <div className="container-sm w-50">
            <h2>{searchParams.get("city")} Weather</h2>
            {(weather !== null) ?
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" className="d-table-cell">Date (mm/dd/yyyy)</th>
                        <th scope="col" className="d-table-cell">Temp (F)</th>
                        <th scope="col" className='d-none d-sm-table-cell'>Description</th>
                        <th scope="col" className='d-none d-sm-table-cell'>Main</th>
                        <th scope="col" className='d-none d-sm-table-cell'>Presssure</th>
                        <th scope="col" className='d-none d-sm-table-cell'>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="d-table-cell">{format(new Date(weather.dt * 1000), 'MM/dd/yyyy')}</td>
                        <td className="d-table-cell">{weather.main.temp.toString()}</td>
                        <td className='d-none d-sm-table-cell'>{weather.weather[0].description}</td>
                        <td className='d-none d-sm-table-cell'>{weather.weather[0].main}</td>
                        <td className='d-none d-sm-table-cell'>{weather.main.pressure.toString()}</td>
                        <td className='d-none d-sm-table-cell'>{weather.main.humidity.toString()}</td>
                    </tr>
                </tbody>
            </table>
            :
            "Loading ..."
            }
            
            <div className="d-flex justify-content-end">
                <Link to="/home"><button className="btn btn-secondary ml-auto">Back</button></Link>
                
            </div>
        </div>
     );
}
 
export default WeatherPage;