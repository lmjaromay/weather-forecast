import { useAuth0 } from "@auth0/auth0-react";
import { FunctionComponent } from "react";

import logo from '../../logo.svg';


interface HeaderProps {
    
}

const loginRoute = process.env.REACT_APP_URL;
 
const Header: FunctionComponent<HeaderProps> = () => {
    const { logout } = useAuth0<{
        name: string;
      }>();

    return ( 
        <header className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
                <img src={logo} alt="Weather App" width="100px"/>
                <h1 className="m-0">Weather Forecast</h1>
            </div>
            <div className="p-4">
                <button className="btn btn-secondary" onClick={() => logout({ returnTo: loginRoute })}>Logout</button>
            </div>
        </header>
     );
}
 
export default Header;