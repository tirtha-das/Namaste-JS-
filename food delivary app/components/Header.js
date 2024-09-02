const Header = ()=>{
    return (
      <div className="headerContainer">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"alt="food app logo"/>
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