
import DisplayCards from "../additional-comps/DisplayCards";
function Home({products}){
	// ACCOUNTED
    return(
        <div id="home-container">
			<nav/>
			<section>
				<h1> 
				ARA FRITZ <br/>
				UX / UI DESIGNER
				</h1>
				<p>
				Making a positive impact on my community through collaboration, empathy and funky tunes.
				</p>
				<p> my recent work</p>
				<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/></svg>
			</section>
			<section>
				{DisplayCards("home",products[-1])}
				{DisplayCards("home",products[-2])}
				{DisplayCards("home",products[-3])}
			</section>
			

			
        </div>
        
    );
}
;
export default Home;