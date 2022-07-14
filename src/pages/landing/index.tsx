
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';



interface LandingPageProps {
    
}
 
const LandingPage: FunctionComponent<LandingPageProps> = () => {
    return ( 
            <div className="container-sm w-75 p-4 mt-4">
                <p>Welcome to the weather forecast web application. Please login with your Github user to use the application and view the weather in your city</p>
                <Link to="/home"><button className="btn btn-primary mt-2">Login</button></Link>
            </div>
        );
}
 
export default LandingPage;