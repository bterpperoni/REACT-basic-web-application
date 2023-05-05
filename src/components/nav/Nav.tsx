import type { Children } from "../../interface";
import "./Nav.css";

const Nav = ( props: Children  ) => {
    return (
     <nav className="nav">
        {props.children}
     </nav>   
    )}

export default Nav;