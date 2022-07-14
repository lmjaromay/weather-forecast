import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import logo from '../../logo.svg';


interface HeaderProps {
    
}
 
const Header: FunctionComponent<HeaderProps> = () => {
    return ( 
        <header className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
                <img src={logo} alt="Weather App" width="100px"/>
                <h1 className="m-0">Weather Forecast</h1>
            </div>
            <div className="p-4">
                <Link to="/"><button className="btn btn-secondary">Logout</button></Link>
            </div>
        </header>
     );
}
 
export default Header;