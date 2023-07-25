
import DisplayCards from "../additional-comps/DisplayCards";
import checkOutMyRecentWork from "../img/checkOutMyRecentWork 1.png"
import arrow from "../img/arrow.png"
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
				
				
				<div id="home-button-section" className="flex-column">
					<img src={checkOutMyRecentWork}/>
					<img src={arrow} />
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