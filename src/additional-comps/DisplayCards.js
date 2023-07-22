import { useNavigate } from "react-router-dom";
function DisplayCards({place, project}){

    const navigate = useNavigate();

// ACCOUNTED
    if (place === "home"){
            return(
            <div className="border">
                <div>
                   <h1> {project.name}</h1>
                    <p>{project.description}</p>
                    {/* Auth? add boolean with edit button */}
                   
                        <button onClick={() => navigate(`/${project.name}`, {state: {project}})}> Read Case Study</button>
                </div>
                <img src="https://static.thenounproject.com/png/1269202-200.png" />
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