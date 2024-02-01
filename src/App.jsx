import { Container } from "react-bootstrap";
import EmpleadoList from "./componentes/EmpleadoList";

function App() {
  return (
    <>
      <Container className="main my-3">
        <EmpleadoList></EmpleadoList>
      </Container>
    </>
  );
}

export default App;
