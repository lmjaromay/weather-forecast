import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface HomePageProps {
    
}
 
const HomePage: FunctionComponent<HomePageProps> = () => {
    return ( 
        <div className="container-sm w-50">
            <p>John Smith</p>
            <p>https://github.com/smithjohn</p>
            <div className="input-group my-3">
                <span className="input-group-text" id="search_city">@</span>
                <input type="text" className="form-control" placeholder="City" aria-label="City" aria-describedby="search-search_city" />
            </div>
            <Link to="/weather"><button className="btn btn-primary">Display Weather</button></Link>
        </div>
     );
}
 
export default HomePage;