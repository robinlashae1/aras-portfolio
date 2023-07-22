import { useLocation } from "react-router-dom";
function Project(){
    const location = useLocation();
    const backgroundColor = location.state.project.background;
    // const { project } = useParams();
    console.log(backgroundColor)
    console.log(location) 
    return(
        <div>
            <div>
                <div>
                <h1 id="project-title">
                    {location.state.project.name}
                </h1>
                <h4>{location.state.project.tagline}</h4>
                <p id="project-heading-text">
                    {location.state.project.description}
                </p>
            </div>
                
            </div>
            <div className="project-background" style={{background: `#${backgroundColor}`}}>
                <img />
            </div>
        </div>
    )
    ;
}
export default Project;

