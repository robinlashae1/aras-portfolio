
function Header(){
    return(
        <div id="header-container">
            <a href="/">
                <img id="nav-logo" alt="" 
                src="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png"/>   
            </a>
            

            <div id="nav-buttons-container">
                <button className="nav-buttons">
                    <a href="/">
                        Home  
                    </a> 
                </button>
                
                
                <button className="nav-buttons">
                    <a href="/about">
                        About Me  
                    </a>   
                </button>
                
                <button className="nav-buttons">
                    <a href="/resume">
                        Resume 
                    </a>   
                </button>
            </div>
            {/* Needs to be right:0 */}
                <button className="nav-buttons" >
                    <a href="/contact">
                        Contact Me  
                    </a>   
                </button>
            
        </div>
    );
}
;
export default Header;