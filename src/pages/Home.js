
import DisplayCards from "../additional-comps/DisplayCards";
function Home({products}){
	// ACCOUNTED
	console.log(products)
    return(
        <div className="flex-column">
			<nav/>

			<section className="border">
				<div>
					<h1 className="border"> 
					ARA FRITZ <br/>
					UX / UI DESIGNER
					</h1>
					<p className="border">
					Making a positive impact on my community <br/>
					through collaboration, empathy and funky tunes.
					</p>
				</div>
				
				<div className="border">
					<p > my recent work</p>
					<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/></svg>
				</div>
			</section>

			<section className="border flex-column" id="projects">
				{products.map((product) => { return(
					<DisplayCards place="home" product={product} />
				)
				})}
			</section>
			
        </div>
        
    );
}
;
export default Home;
// (DisplayCards("home",product))