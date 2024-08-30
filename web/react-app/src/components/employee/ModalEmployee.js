import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  FormGroup,
  Label,
  Input,
  Col,
} from "reactstrap";

const ModalEmployee = ({ modal, toggleModal, currentEmployee }) => {
  return (
    <Modal isOpen={modal} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>Editar Funcionario</ModalHeader>
      <ModalBody>
        <FormGroup row>
          <Label for="name" sm={3}>
            Nombre/s
          </Label>
          <Col sm={9}>
            <Input type="text" id="name" defaultValue={currentEmployee?.name} />
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
              defaultValue={currentEmployee?.lastName}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="docNumber" sm={3}>
            C.I
          </Label>
          <Col sm={9}>
            <Input
              type="text"
              id="docNumber"
              defaultValue={currentEmployee?.docNumber}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="dateBirth" sm={3}>
            Fecha de Nacimiento
          </Label>
          <Col sm={9}>
            <Input
              type="text"
              id="dateBirth"
              defaultValue={currentEmployee?.dateBirth}
            />
          </Col>
        </FormGroup>
        {/* ...otros campos de formulario... */}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggleModal}>
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
