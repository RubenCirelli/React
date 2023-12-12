export function MouseClick(){
    function handleButtonClick(event){
        console.log(event.target.src);
        //preventing that name gets out as output
        
    }
    
    return(
        <button name="one" onClick={handleButtonClick}>
            <img src="abc" alt="photo" />
            click me 
        </button>
    )
    
}
