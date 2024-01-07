import { Counter } from "./Counter";
import { FocusableInput } from "./FocusableInput";

export function App(){
  return(
    <div>
      <Counter initialValue={0} variable={2}/>
    </div>
  )
} 