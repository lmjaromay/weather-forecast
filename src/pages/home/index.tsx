import { useAuth0 } from "@auth0/auth0-react";
import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const HomePage: FunctionComponent = () => {

    const navigate = useNavigate();

    const { user } = useAuth0<{
        name: string;
        nickname: string;
      }>();
    
    let [city, setCity] = useState("");

    const searchCityWeather = () => {
        navigate({
            pathname: '/weather',
            search: `?city=${city}`,
          });
    }

    return ( 
        <div className="container-sm pt-3 text-center">
            <p className="d-none d-sm-block">{user?.name}</p>
            <p className="d-none d-sm-block">https://github.com/{user?.nickname}</p>
            <div className="input-group mt-5 mb-3 mx-auto" style={{maxWidth: "300px"}}>
                <span className="input-group-text" id="search_city"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                <input type="text" value={city} onChange={c => setCity(c.currentTarget.value)} className="form-control" placeholder="City" aria-label="City" aria-describedby="search-search_city" />
            </div>
            <button className="btn btn-primary" onClick={searchCityWeather} disabled={ city === "" ? true : false}>Display Weather</button>
        </div>
     );
}
 
export default HomePage;