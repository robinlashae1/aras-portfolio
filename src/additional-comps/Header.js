
function Header(){
    return(
        <div id="header-container">
            <a href="/">
                {/* <img id="nav-logo" alt="" 
                src="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png"/>    */}
                A
            </a>
            <svg viewBox="0 0 100 80" width="40" height="40">
                <rect width="100" height="15" rx="8"></rect>
                <rect y="30" width="100" height="15" rx="8"></rect>
                <rect y="60" width="100" height="15" rx="8"></rect>
            </svg>
        </div>
    );
}
;
export default Header;