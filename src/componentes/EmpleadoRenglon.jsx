import { ListGroup } from "react-bootstrap";
import EmpleadoAvatar from "./empleadoAvatar";


const EmpleadoRenglon = ({fullName, title, department, pic}) => {
  return (
    <>
      <ListGroup.Item className="listaEmpleados border-primary border-bottom py-4 d-flex">
        <EmpleadoAvatar pic={pic}></EmpleadoAvatar>
        <div className="ms-4">
          <h6>{fullName}</h6>
          <div className="d-flex">
            <p className="me-3">{title}</p>
            <p className="rounded-1 bg-info">{department}</p>
          </div>
        </div>
      </ListGroup.Item>
    </>
  );
};

export default EmpleadoRenglon;