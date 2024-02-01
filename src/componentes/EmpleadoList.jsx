import { ListGroup } from "react-bootstrap";
import EmpleadoRenglon from "./EmpleadoRenglon";

const EmpleadoList = () => {
  const empleados = [
    {
      id: 1,
      fullName: "Laya Dueñas",
      title: "CEO",
      department: "Business",
      pic: "/assets/1.png",
    },
    {
      id: 2,
      fullName: "Astryd Vallés",
      title: "CMO",
      department: "Marketing",
      pic: "/assets/2.png",
    },
    {
      id: 3,
      fullName: "Shantell Meza",
      title: "CFO",
      department: "Business",
      pic: "/assets/3.png",
    },
    {
      id: 4,
      fullName: "Sergio Ocampo",
      title: "CTO",
      department: "Engineering",
      pic: "/assets/4.png",
    },
    {
      id: 5,
      fullName: "Ares Jiménez",
      title: "Art Director",
      department: "Marketing",
      pic: "/assets/5.png",
    },
    {
      id: 6,
      fullName: "Marta Pérez",
      title: "Frontend Dev",
      department: "Engineering",
      pic: "/assets/6.png",
    },
    {
      id: 7,
      fullName: "Diego Lopez",
      title: "Digital Strategist",
      department: "Marketing",
      pic: "/assets/7.png",
    },
    {
      id: 8,
      fullName: "Carlos Fuentes",
      title: "Backend Dev",
      department: "Engineering",
      pic: "/assets/8.png",
    },
    {
      id: 9,
      fullName: "Bernard Jung",
      title: "DevOps Engineer",
      department: "Engineering",
      pic: "/assets/9.png",
    },
  ];

  return (
    <>
      <ListGroup className="d-flex justify-content-center align-items-center">
        {empleados.map((empleado) => (
          <EmpleadoRenglon
            key={empleado.id}
            fullName={empleado.fullName}
            title={empleado.title}
            department={empleado.department}
            pic={empleado.pic}
          ></EmpleadoRenglon>
        ))}
      </ListGroup>
    </>
  );
};

export default EmpleadoList;