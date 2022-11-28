import "./Modal.css";

function Modal({ title, cancelModal, confirmModal }) {
  return (
    <>
      <div className="modal">
        <p className="modal__title">{title}</p>
        <div className="modal__buttons">
          <button
            className="btn btn__cancel"
            onClick={cancelModal}
          >
            Cancel
          </button>
          <button className="btn" onClick={confirmModal}>
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal;
