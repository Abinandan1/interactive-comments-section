import { useAppContext } from "../App";
import { Wrapper } from "../wrappers/Comment";

const Comment = ({ comment }) => {
  const { currentUser } = useAppContext();
  return (
    <Wrapper>
      <div className="score-container hide-mobile">
        <img src="/images/icon-plus.svg" alt="" />
        <p className="score">{comment.score}</p>
        <img src="/images/icon-minus.svg" alt="" />
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
            <button className="delete-btn">
              <img src="/images/icon-delete.svg" alt="" /> delete
            </button>
            <button className="edit-btn">
              <img src="/images/icon-edit.svg" alt="" /> edit
            </button>
          </div>
        ) : (
          <button className="reply-btn hide-mobile">
            <img src="/images/icon-reply.svg" alt="" /> Reply
          </button>
        )}
      </header>
      <p className="content">
        {comment.replyingTo && <span>@{comment.replyingTo} </span>}
        {comment.content}
      </p>
      <footer className="hide-desktop">
        <div className="score-container">
          <img src="/images/icon-plus.svg" alt="" />
          <p className="score">{comment.score}</p>
          <img src="/images/icon-minus.svg" alt="" />
        </div>
        {comment.user.username === currentUser.username ? (
          <div className="you-btns-container">
            <button className="delete-btn">
              <img src="/images/icon-delete.svg" alt="" /> delete
            </button>
            <button className="edit-btn">
              <img src="/images/icon-edit.svg" alt="" /> edit
            </button>
          </div>
        ) : (
          <button className="reply-btn">
            <img src="/images/icon-reply.svg" alt="" /> Reply
          </button>
        )}
      </footer>
    </Wrapper>
  );
};
export default Comment;
