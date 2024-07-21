import { useAppContext } from "../App";
import { Wrapper } from "../wrappers/AddComment";

const AddComment = () => {
  const { currentUser } = useAppContext();
  return (
    <Wrapper>
      <form>
        <textarea
          type="text"
          id="comment"
          name="comment"
          placeholder="Add a comment.."
        />

        <img src={currentUser.image.png} alt="" />
        <button type="submit" className="submit-btn">
          send
        </button>
      </form>
    </Wrapper>
  );
};
export default AddComment;
