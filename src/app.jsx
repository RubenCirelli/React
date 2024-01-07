import { Color } from "./Color";
import { Colors } from "./Colors";
import { Counter } from "./Counter";
import { FocusableInput } from "./FocusableInput";
import { ToDoList } from "./ListsAndState";
import { ToDo } from "./ToDo";

export function App() {
  return (
    <div>
      <ToDo />
      {/* <ToDoList todos={["", "", "", "", "",""]}/> */}
    </div>
  )
} 