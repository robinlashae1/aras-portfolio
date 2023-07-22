function ProjectIcon(){
    // ACCOUNTED
    return(
       
        <div id="projectsIcon">
        <a href="resume.pdf">     
              <div className="rotating">
        
        <svg viewBox="0 0 200 200">
            <path id="textPath" d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0" transform="translate(100,100)" fill="none" strokeWidth="0"></path>
            <g fontSize="18px">
            <text textAnchor="start">
                <textPath className="coloring" xlinkHref="#textPath" startOffset="0%"> Resume | Resume | Resume |</textPath>
            </text>
            </g>
        </svg>
        
        </div>
        </a>
        </div>
        
    );
}
export default ProjectIcon;