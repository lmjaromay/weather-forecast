import { FunctionComponent } from "react";

interface HomePageProps {
    
}
 
const HomePage: FunctionComponent<HomePageProps> = () => {
    return ( 
        <div className="container-sm w-50">
            <p>John Smith</p>
            <p>https://github.com/smithjohn</p>
            <div className="input-group my-3">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <button>Display Weather</button>
        </div>
     );
}
 
export default HomePage;