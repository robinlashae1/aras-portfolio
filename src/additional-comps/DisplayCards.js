function DisplayCards({place, product}){
// ACCOUNTED
    if (place === "home"){
            return(
            <div>
                <h1> {product.Name}</h1>
                <div> 
                    <p>{product.description}</p>
                    <img background gradient/>
                    </div>
                    {/* Auth? add boolean with edit button */}
                <a href="/">
                    <button> Read Case Study</button>
                </a>
            </div>
            )
            }
    else if(place === "About"){
        return(
         <div>
             <div>
                </div>
                   <div>
                    <h2> {product.Title}</h2>
                    <p> {product.description}</p>
                </div>
            </div>
        )
        }  
    };
    export default DisplayCards;