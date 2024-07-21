import { useAppContext } from "../App";
import { Wrapper } from "../wrappers/Comments";
import AddComment from "./AddComment";
import Comment from "./Comment";

const Comments = () => {
  const { comments } = useAppContext();
  return (
    <Wrapper>
      <div className="comments">
        {comments.map((comment) => {
          const { replies } = comment;
          console.log(replies.length > 0);
          if (replies.length > 0) {
            return (
              <>
                <Comment key={comment.id} comment={comment} />
                <div className="replies-container">
                  <hr />
                  <div className="replies">
                    {replies.map((reply) => {
                      return <Comment key={reply.id} comment={reply} />;
                    })}
                  </div>
                </div>
              </>
            );
          } else {
            return <Comment key={comment.id} comment={comment} />;
          }
        })}
      </div>
      <AddComment />
    </Wrapper>
  );
};
export default Comments;
