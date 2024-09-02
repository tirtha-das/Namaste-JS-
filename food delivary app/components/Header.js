import {LOGO_URL} from "../utils/constant"

const Header = ()=>{
    return (
      <div className="headerContainer">
        <img className="logo" src={LOGO_URL} alt="food app logo"/>
       <nav className="navBar">
        <ul className="navList">
            <li className="navItem">home</li>
            <li className="navItem">about us</li>
            <li className="navItem">contact us</li>
            <li className="navItem">cart</li>
        </ul>
       </nav>
      </div>
    );
};

export default Header;