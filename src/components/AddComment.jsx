import { useAppContext } from "../App";
import { Wrapper } from "../wrappers/AddComment";
import Button from "./Button";

const AddComment = ({ text }) => {
  const { currentUser, addNewComment, replyComment } = useAppContext();
  const sendOrReply =
    text === "send" ? addNewComment : text === "reply" && replyComment;
  return (
    <Wrapper>
      <form onSubmit={sendOrReply}>
        <textarea
          type="text"
          id="comment"
          name="comment"
          placeholder="Add a comment.."
        />
        <img src={currentUser.image.png} alt="" />
        <Button text={text} />
      </form>
    </Wrapper>
  );
};
export default AddComment;
