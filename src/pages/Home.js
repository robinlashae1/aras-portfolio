
import DisplayCards from "../additional-comps/DisplayCards";
import checkOutMyRecentWork from "../img/checkOutMyRecentWork 1.png"
function Home({projects}){
	console.log(projects)

	// ACCOUNTED
    return(
        <div className="flex-column">
			<nav/>

			<section className="home-sections flex-column">
					<div id="home-inner-border">
						<div id="home-main-text" className="flex-column">
							<h1 > 
								ARA FRITZ <br/>
								UX / UI DESIGNER
							</h1>
							<p >
							Making a positive impact on my community <br/>
							through collaboration, empathy and funky tunes.
							</p>
						</div>
				</div>
				
				
				<div id="home-button-section">
					<img src={checkOutMyRecentWork}/>
					<svg id="home-arrow" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/></svg>
				</div>
			</section>

			<section className="border flex-column home-sections" id="projects">
				{projects.map((project) => { return(
					<DisplayCards place="home" project={project} />
				)
				})}
			</section>
			
        </div>
        
    );
}
;
export default Home;
// (DisplayCards("home",product))