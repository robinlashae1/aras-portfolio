function About (){
  // ACCOUNTED
    return(
        <div id="about-container" >
          <section className="flex-row">
            <div id="about-main-text">
              <h1> Hi there!</h1>
              <p> 
                My name is Ara Fritz. I’m a nonbinary multi-cultural UX/UI designer from Philadelphia. I thrive in creative enenvironments 
                and have a passion for creating art in many forms. I became a designer to achieve my two life goals: to bring more beauty 
                into the world and to foster opportunities for human connection. When I’m not designing, you can catch me in a 
                recorecording studio with my friends singing and writing music for my new album :)
              </p>
            </div>
            <img id="about-image" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"/>
            <div>
                <p> oh wait, there's more</p>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/></svg>
					  </div>
          </section>

          <section>
            
            <p>
              I have a strong grasp on the foundation of the design process.
				      however these are the things I'm reaaallyyy good at:
            </p>
            <div>
                <h1>
                  Prototyping
                </h1>
                <p>
                  The prospect of bringing a product to life, fills me with excitment. It's incredibly rewarding to witness the transformation of an idea into a tangible experience. I’ve always had a knack for puzzles, and prototyping feels like one vast puzzle waiting to be solved!
                </p>
              </div>

              <div>
                <h1>
                  User Research
                </h1>
                <p>
                  As a result of my creative background, establishing connections with others comes naturally to me. This  ability allows me to grasp users' perspectives, ensuring their comfort in communicating and sharing their ideas with me. I find joy getting to engage in conversations and gain insights into people's unique perceptions of the world.  
                </p>
              </div>

              <div>
                <h1>
                  Visual Design & Style Guides
                </h1>
                <p>
                  I begin the process by immersing myself in Pinterest (which happens to be my all-time favorite app) to explore a plethora of visual solutions aligned with the project's objectives and branding. These invaluable sources of inspiration guide me in curating mood boards, and once the perfect vision materializes, I begin crafting iterations of style tiles and design guides.
                </p>
              </div>
              
          </section>
            
        </div>
    );
}
;
export default About;
