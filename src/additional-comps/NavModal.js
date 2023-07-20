import ProjectIcon from "./ProjectIcon.js"
function NavModal(){
    // ACCOUNTED
return(
    <div id="" className="flex-row">
        
        <div className="flex-column">
            <a href="/Projects">
                <h1>
                    Projects
                </h1>
            </a>
            <a href="/about">
                <h1>
                    About Me
                </h1>
            </a>
            <a href="/Connect">
                <h1>
                    Connect
                </h1>
            </a>
            <button> X </button>
        </div>
        <div>
            <ProjectIcon />
        </div>
        
        
    </div>
)
};
export default NavModal;