import A from "../img/A.png";
function Header(){
    return(
        <div id="header-container">
            <a href="/">
                <img id="nav-logo" alt="the letter A" 
                src={A}   />
                
            </a>
            <svg viewBox="0 0 100 80" width="40" height="40" id="navMenuButton">
                <rect width="100" height="15" rx="8"></rect>
                <rect y="30" width="100" height="15" rx="8"></rect>
                <rect y="60" width="100" height="15" rx="8"></rect>
            </svg>
        </div>
    );
}
;
export default Header;