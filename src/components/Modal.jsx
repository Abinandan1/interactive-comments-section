import { useAppContext } from "../App";
import { Wrapper } from "../wrappers/Modal";

const Modal = () => {
  const { setIsModalOpen, deleteComment } = useAppContext();
  return (
    <Wrapper>
      <div className="card">
        <h1>Delete Comment</h1>
        <p>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className="modal-btn-container">
          <button onClick={() => setIsModalOpen(false)} className="modal-btn">
            no, cancel
          </button>
          <button
            onClick={() => {
              setIsModalOpen(false);
              deleteComment();
            }}
            className="modal-btn"
          >
            yes, delete
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default Modal;
