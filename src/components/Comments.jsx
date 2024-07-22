import { useAppContext } from "../App";
import { Wrapper } from "../wrappers/Comments";
import AddComment from "./AddComment";
import Comment from "./Comment";

const Comments = () => {
  const { comments, replyId, setReplyId } = useAppContext();
  return (
    <Wrapper>
      <div className="comments">
        {comments.map((comment) => {
          const { replies } = comment;
          if (replies.length > 0) {
            return (
              <>
                <Comment key={comment.id} comment={comment} />
                {replyId === comment.id && <AddComment text="reply" />}
                <div className="replies-container">
                  <hr />
                  <div className="replies">
                    {replies.map((reply) => {
                      return (
                        <>
                          <Comment key={reply.id} comment={reply} />
                          {replyId === reply.id && <AddComment text="reply" />}
                        </>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          } else {
            return (
              <>
                <Comment key={comment.id} comment={comment} />
                {replyId === comment.id && <AddComment text="reply" />}
              </>
            );
          }
        })}
        <AddComment text="send" />
      </div>
    </Wrapper>
  );
};
export default Comments;
