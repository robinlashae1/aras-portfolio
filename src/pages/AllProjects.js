function AllProjects(){
    return(
        <div>
            {projects.map((project) => {
            return(
             <div className="project-container">
                <h3 className="project-titles">
                    {project.Title}
                </h3>
                <img src={project.image} className="project-images"/>
            </div>   
            )
        }) }
        
        </div>
    );
};
export default AllProjects;

const projects = [
    {Title: "Hayden" , image: ""},
    {Title: "Hayden" , image: ""},
    {Title: "Hayden" , image: ""}
]