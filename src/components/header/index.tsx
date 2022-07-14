import { useAuth0 } from "@auth0/auth0-react";
import { FunctionComponent } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'

const loginRoute = process.env.REACT_APP_URL;
 
const Header: FunctionComponent = () => {
    const { isAuthenticated, logout } = useAuth0<{
        name: string;
      }>();

    return ( 
        <header className="d-flex align-items-center justify-content-between border border-bottom-1">
            <div className="d-flex align-items-center px-4">
                <FontAwesomeIcon icon={faCloud} size="4x" />
                {isAuthenticated ? <h1 className="m-0 mx-4 d-none d-sm-block">Weather Forecast</h1> : <h1 className="m-0 mx-4">Weather Forecast</h1>}
            </div>
            <div className="p-4">
                {isAuthenticated ? <button className="btn btn-secondary" onClick={() => logout({ returnTo: loginRoute })}>Logout</button>: ""}
            </div>
        </header>
     );
}
 
export default Header;