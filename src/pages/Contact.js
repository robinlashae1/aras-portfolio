function Contact(){
    return(
        <div className="flex-column">
            <h1>
                Let's Chat :)
            </h1>
            <div className="flex-row">
            <input placeholder="Name" className=""/>
            <input placeholder="Email Address"/>  
            </div>
            
            <input placeholder="Leave a Message"/>
            
            <button>
                Submit
            </button>
        </div>
    );
}
export default Contact;