import React, { useState } from "react";
import { Form, Alert } from "reactstrap";

const FormWithNotification = ({ children, msg, onSubmitAction }) => {
  const [time, setTime] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    try {
      onSubmitAction(e);
      setAlertVisible(true);
      setTime("");
      setTimeout(() => setAlertVisible(false), 3000); // Ocultar la alerta después de 3 segundos
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Form inline onSubmit={handleFormSubmit}>
        {children}
      </Form>

      {alertVisible && (
        <>
          <hr />
          <Alert color="success">{msg}</Alert>
        </>
      )}
    </>
  );
};

export default FormWithNotification;
