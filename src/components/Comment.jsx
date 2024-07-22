import { useAppContext } from "../App";
import { Wrapper } from "../wrappers/Comment";
import Button from "./Button";

const Comment = ({ comment }) => {
  const {
    currentUser,
    deleteComment,
    editComment,
    setReplyId,
    setReplyUsername,
    editId,
    setEditId,
    setIsModalOpen,
    setDeleteId,
    updateScore,
  } = useAppContext();
  return (
    <Wrapper>
      <div className="score-container hide-mobile">
        <button
          className="score-btn"
          onClick={() => updateScore(comment.id, "+")}
        >
          <img src="/images/icon-plus.svg" alt="" />
        </button>
        <p className="score">{comment.score}</p>
        <button
          className="score-btn"
          disabled={comment.score === 0}
          onClick={() => updateScore(comment.id, "-")}
        >
          <img src="/images/icon-minus.svg" alt="" />
        </button>
      </div>
      <header>
        <div className="info">
          <img className="user-img" src={comment.user.image.png} alt="" />
          <p className="user-name">{comment.user.username}</p>
          {comment.user.username === currentUser.username && (
            <p className="you hide-desktop">you</p>
          )}
          <p className="created-at">{comment.createdAt}</p>
          {comment.user.username === currentUser.username && (
            <p className="you hide-mobile">you</p>
          )}
        </div>
        {comment.user.username === currentUser.username ? (
          <div className="you-btns-container hide-mobile">
            <button
              className="delete-btn"
              onClick={() => {
                setIsModalOpen(true);
                setDeleteId(comment.id);
              }}
            >
              <img src="/images/icon-delete.svg" alt="" /> delete
            </button>
            <button onClick={() => setEditId(comment.id)} className="edit-btn">
              <img src="/images/icon-edit.svg" alt="" /> edit
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              setReplyId(comment.id);
              setReplyUsername(comment.user.username);
            }}
            className="reply-btn hide-mobile"
          >
            <img src="/images/icon-reply.svg" alt="" /> Reply
          </button>
        )}
      </header>
      {editId === comment.id ? (
        <form onSubmit={editComment}>
          <textarea
            type="text"
            id="comment"
            name="comment"
            defaultValue={comment.content}
          />
          <Button text="update" />
        </form>
      ) : (
        <p className="content">
          {comment.replyingTo && <span>@{comment.replyingTo} </span>}
          {comment.content}
        </p>
      )}
      <footer className="hide-desktop">
        <div className="score-container">
          <button
            className="score-btn"
            onClick={() => updateScore(comment.id, "+")}
          >
            <img src="/images/icon-plus.svg" alt="" />
          </button>
          <p className="score">{comment.score}</p>
          <button
            className="score-btn"
            disabled={comment.score === 0}
            onClick={() => updateScore(comment.id, "-")}
          >
            <img src="/images/icon-minus.svg" alt="" />
          </button>
        </div>
        {comment.user.username === currentUser.username ? (
          <div className="you-btns-container">
            <button
              onClick={() => {
                setIsModalOpen(true);
                setDeleteId(comment.id);
              }}
              className="delete-btn"
            >
              <img src="/images/icon-delete.svg" alt="" /> delete
            </button>
            <button onClick={() => setEditId(comment.id)} className="edit-btn">
              <img src="/images/icon-edit.svg" alt="" /> edit
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              setReplyId(comment.id);
              setReplyUsername(comment.user.username);
            }}
            className="reply-btn"
          >
            <img src="/images/icon-reply.svg" alt="" /> Reply
          </button>
        )}
      </footer>
    </Wrapper>
  );
};
export default Comment;
