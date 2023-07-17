import ProjectIcon from "ProjectIcon.js"
function NavModal(){
    // ACCOUNTED
return(
    <div id="navModal">
        <button> X </button>
        <div>
            <a href="/Projects">
                <h1>
                    Projects
                </h1>
            </a>
            <a href="/AboutMe">
                <h1>
                    About Me
                </h1>
            </a>
            <a href="/Connect">
                <h1>
                    Connect
                </h1>
            </a>
        </div>
        <div>
            <ProjectIcon />
        </div>
        
        
    </div>
)
};
export default NavModal;