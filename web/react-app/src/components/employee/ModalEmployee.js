import React, { useContext } from "react";
import { EmployeeContext } from "../../context";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
} from "reactstrap";

const ModalEmployee = () => {
  const {
    modal,
    toggleModal,
    editingEmployee,
    setEditingEmployee,
    editEmployee,
  } = useContext(EmployeeContext);

  const handleInputChangeEdit = (e) => {
    console.log(JSON.stringify(e.value));
    const { name, value } = e.target;
    setEditingEmployee({ ...editingEmployee, [name]: value });
  };

  return (
    <Modal isOpen={modal} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>Editar Funcionario</ModalHeader>
      <ModalBody>
        <Form onSubmit={editEmployee}>
          <FormGroup row>
            <Label for="name" sm={3}>
              Nombre/s
            </Label>
            <Col sm={9}>
              <Input
                type="text"
                id="name"
                name="name"
                value={editingEmployee?.name}
                onChange={handleInputChangeEdit}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="lastName" sm={3}>
              Apellido/s
            </Label>
            <Col sm={9}>
              <Input
                type="text"
                id="lastName"
                name="lastName"
                value={editingEmployee?.lastName}
                onChange={handleInputChangeEdit}
                required
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="documentNumber" sm={3}>
              C.I
            </Label>
            <Col sm={9}>
              <Input
                type="number"
                id="documentNumber"
                name="documentNumber"
                value={editingEmployee?.documentNumber}
                onChange={handleInputChangeEdit}
                required
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="dateOfBirth" sm={3}>
              Fecha de Nacimiento
            </Label>
            <Col sm={9}>
              <Input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={editingEmployee?.dateOfBirth}
                onChange={handleInputChangeEdit}
                required
              />
            </Col>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={editEmployee}>
          Guardar
        </Button>{" "}
        <Button color="secondary" onClick={toggleModal}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
};
export default ModalEmployee;
