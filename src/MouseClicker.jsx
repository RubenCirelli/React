export function MouseClick(){
    function handleButtonClick(event){
        console.log(event.target.name);
    }
    
    return(
        <button name="one" onClick={handleButtonClick}>
            click me 
        </button>
    )
    
}
