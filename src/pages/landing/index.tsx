
import { FunctionComponent } from 'react';



interface LandingPageProps {
    
}
 
const LandingPage: FunctionComponent<LandingPageProps> = () => {
    return ( 
            <div className="container-sm w-75 p-4 mt-4">
                <p>Welcome to the weather forecast web application. Please login with your Github user to use the application and view the weather in your city</p>
                <button className="mt-2">Login</button>
            </div>
        );
}
 
export default LandingPage;