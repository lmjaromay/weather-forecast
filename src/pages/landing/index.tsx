import { FunctionComponent } from 'react';


import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
  
    return <button className="btn btn-primary" onClick={() => loginWithRedirect()}>Log In</button>;
  };

const LandingPage: FunctionComponent = () => {
    return ( 
            <div className="container-sm w-75 p-4 mt-4">
                <p>Welcome to the weather forecast web application. Please login with your Github user to use the application and view the weather in your city</p>
                <LoginButton />
            </div>
        );
}
 
export default LandingPage;