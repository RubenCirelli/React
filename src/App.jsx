import { Hello } from "./Welcome"

export function App(){
    return(
        <>
        {/* <Hello /> lasciando il props non compilato l'output rimane invariato, lasciando solo Hello! */}
        <Hello name="John" age={66}/>
        </>
    )
}