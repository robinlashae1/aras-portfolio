import { useNavigate } from "react-router-dom";
function DisplayCards({place, project}){

    const navigate = useNavigate();

// ACCOUNTED

const background = project.background;
console.log(background)
    if (place === "home"){
            return(
            <div className="home-display-card flex-row">
                <div className="flex-column">
                   <h1> {project.name}</h1>
                    <p>{project.description}</p>
                    {/* Auth? add boolean with edit button */}
                   
                    <button onClick={() => navigate(`/${project.name}`, {state: {project}})}> Read Case Study</button>
                </div> 
                <div>
                <img className="project-main-image" src={project.mainImage} />
                 <div className="home-display-background" style={{background: `#${background}`}}/>
                </div>    
               
            </div>
            )
            }
    else if(place === "About"){
        return(
         <div>
             <div>
                </div>
                   <div>
                    <h2> {project.Title}</h2>
                    <p> {project.description}</p>
                </div>
            </div>
        )
        } 
        else {
            return(
                <>
                </>
            )
        }
    };
    export default DisplayCards;