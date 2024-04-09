import Modal from "react-bootstrap/Modal";

const ModalDepartments = ({ show, handleClose }) => {
  return (
    <>
      <Modal className="modal-lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cobertura</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            className="modal-image"
            src="/modalDeparments.png"
            alt="cobertura"
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalDepartments;
