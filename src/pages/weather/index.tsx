import { FunctionComponent } from 'react';

interface WeatherPageProps {
    
}
 
const WeatherPage: FunctionComponent<WeatherPageProps> = () => {
    return ( 
        <div className="container-sm w-50">
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
                        <td className="d-table-cell">09/01/2020</td>
                        <td className="d-table-cell">75</td>
                        <td className='d-none d-sm-table-cell'>Sky is clear</td>
                        <td className='d-none d-sm-table-cell'>Clear</td>
                        <td className='d-none d-sm-table-cell'>1023.68</td>
                        <td className='d-none d-sm-table-cell'>100</td>
                    </tr>
                </tbody>
            </table>
        </div>
     );
}
 
export default WeatherPage;