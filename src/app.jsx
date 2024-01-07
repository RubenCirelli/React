import { AlertClock } from "./AlertClock";
import { Color } from "./Color";
import { Colors } from "./Colors";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { FocusableInput } from "./FocusableInput";
import { ToDoList } from "./ListsAndState";
import { ToDo } from "./ToDo";
import { ToDo2 } from "./ToDoProva";
import { Welcome } from "./Welcome";


export function App() {
  return (
    <Container title = {<h1>Questa è una prova</h1>}>
      <Welcome name="Ruben" eta={22} />
      <AlertClock/>
      <br />
      <ToDo2 />

    </Container>
  )
} 