import data from "../data.json";
import { Comments, Modal } from "./components";
import { createContext, useContext, useEffect, useState } from "react";
const AppContext = createContext();
function App() {
  const [comments, setComments] = useState(
    // GET COMMENTS FROM LOCAL STORAGE OR USE THE ONE FROM DATA.JSON
    JSON.parse(localStorage.getItem("comments")) || data.comments
  );
  // CURRENT USER
  const { currentUser } = data;
  // TRACK COUNT OF ID
  let idCount = comments.length;
  comments.forEach((comment) => {
    idCount += comment.replies.length;
  });
  // REPLY ID
  const [replyId, setReplyId] = useState(0);
  // REPLY USERNAME
  const [replyUsername, setReplyUsername] = useState("");
  // REPLY PARENT IN CASE IF WE ARE REPLYING TO ANOTHER REPLY
  const replyParent = comments.find((comment) =>
    comment.replies.find((reply) => {
      return replyId === reply.id;
    })
  )?.user?.username;
  // EDIT ID
  const [editId, setEditId] = useState(0);
  // DELETE ID
  const [deleteId, setDeleteId] = useState(0);
  // SET MODAL - FOR DELETE
  const [isModalOpen, setIsModalOpen] = useState(false);
  // ADD NEW COMMENT
  const addNewComment = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newComment = {
      id: idCount + 1,
      content: formData.get("comment"),
      createdAt: "Now",
      score: 0,
      user: currentUser,
      replies: [],
    };
    setComments([...comments, newComment]);
  };
  // REPLY COMMENT
  const replyComment = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newComment = {
      id: idCount + 1,
      content: formData.get("comment"),
      createdAt: "Now",
      score: 0,
      user: currentUser,
      replyingTo: replyUsername,
    };
    const newComments = comments.map((comment) => {
      if (
        comment.user.username === replyUsername ||
        comment.user.username === replyParent
      ) {
        comment.replies = [...comment.replies, newComment];
      }
      return comment;
    });
    setReplyId(0);
    setComments(newComments);
  };
  // DELETE COMMENT
  const deleteComment = () => {
    let newComments = comments.filter((comment) => comment.id !== deleteId);
    if (newComments.length === comments.length) {
      newComments = comments.map((comment) => {
        comment.replies = comment.replies.filter(
          (reply) => reply.id !== deleteId
        );
        return comment;
      });
    }
    setComments(newComments);
  };
  // EDIT COMMENT
  const editComment = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newComments = comments.map((comment) => {
      if (comment.id === editId) {
        comment.content = formData.get("comment");
      } else {
        comment.replies = comment.replies.map((reply) => {
          if (reply.id === editId) {
            reply.content = formData.get("comment");
          }
          return reply;
        });
      }
      return comment;
    });
    setComments(newComments);
    setEditId(0);
  };
  // UPDATE SCORES
  const updateScore = (id, operation) => {
    const newComments = comments.map((comment) => {
      if (comment.id === id) {
        operation === "+" ? (comment.score += 1) : (comment.score -= 1);
      } else {
        comment.replies = comment.replies.map((reply) => {
          if (reply.id === id) {
            operation === "+" ? (reply.score += 1) : (reply.score -= 1);
          }
          return reply;
        });
      }
      return comment;
    });
    setComments(newComments);
  };
  useEffect(() => {
    // SET THE COMMENTS TO THE LOCAL STORAGE FOR THE FIRST TIME
    // (OR)
    // ADD THE NEW/UPDATED/DELETED COMMENTS TO THE LOCAL STORAGE
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);
  return (
    <AppContext.Provider
      value={{
        comments,
        setComments,
        currentUser,
        idCount,
        replyId,
        setReplyId,
        editId,
        setEditId,
        deleteId,
        setDeleteId,
        isModalOpen,
        setIsModalOpen,
        replyUsername,
        setReplyUsername,
        addNewComment,
        deleteComment,
        replyComment,
        editComment,
        updateScore,
      }}
    >
      <main>
        <Comments />
        {isModalOpen && <Modal />}
      </main>
    </AppContext.Provider>
  );
}
export const useAppContext = () => useContext(AppContext);

export default App;
