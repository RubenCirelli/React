import { Color } from "./Color";
import { Colors } from "./Colors";
import { Counter } from "./Counter";
import { FocusableInput } from "./FocusableInput";

export function App() {
  return (
    <div>
      <Colors colors={[
        {id:1, name:"yellow"},
        {id:2, name:"red"},
        {id:3, name:"green"},
        {id:4, name:"blue"},
        {id:5, name:"marrò"},
      ]}/>
    </div>
  )
} 