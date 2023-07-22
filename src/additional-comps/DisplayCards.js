function DisplayCards({place, product}){
// ACCOUNTED
    if (place === "home"){
            return(
            <div className="border">
                <div>
                   <h1> {product.name}</h1>
                    <p>{product.description}</p>
                    {/* Auth? add boolean with edit button */}
                    <a href={`/${product.name}`}>
                        <button> Read Case Study</button>
                    </a> 
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
                    <h2> {product.Title}</h2>
                    <p> {product.description}</p>
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