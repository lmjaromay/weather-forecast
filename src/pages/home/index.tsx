import { useAuth0 } from "@auth0/auth0-react";
import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface HomePageProps {
    
}
 
const HomePage: FunctionComponent<HomePageProps> = () => {

    const navigate = useNavigate();

    const { user } = useAuth0<{
        name: string;
        nickname: string;
      }>();
    
    let [city, setCity] = useState("");

    const searchCityWeather = () => {
        if(city === "") {

        }

        navigate({
            pathname: '/weather',
            search: `?city=${city}`,
          });
    }

    return ( 
        <div className="container-sm w-50">
            <p>{user?.name}</p>
            <p>https://github.com/{user?.nickname}</p>
            <div className="input-group my-3">
                <span className="input-group-text" id="search_city">@</span>
                <input type="text" value={city} onChange={c => setCity(c.currentTarget.value)} className="form-control" placeholder="City" aria-label="City" aria-describedby="search-search_city" />
            </div>
            <button className="btn btn-primary" onClick={searchCityWeather}>Display Weather</button>
        </div>
     );
}
 
export default HomePage;