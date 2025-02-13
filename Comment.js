import { useState, useEffect } from "react";
import React from "react";

const CommentBox = ({ onSave }) => {
  const [comment, setComment] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    if (comment.trim()) {
      onSave(comment); // Save the comment
      setIsEditing(false); // Hide input field after saving
      setComment(""); // Clear input
    }
  };

  return (
    <div>
      {!isEditing ? (
        <button onClick={() => setIsEditing(true)}>Comment</button>
      ) : (
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onBlur={handleSave} // Auto-save when clicking outside
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSave(); // Save on Enter
            }
          }}
          autoFocus
        />
      )}
    </div>
  );
};

export default function App() {
  const [comments, setComments] = useState([]);

  // ✅ Load comments from localStorage when the component mounts
  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // ✅ Save comments to localStorage whenever they change
  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem("comments", JSON.stringify(comments));
    }
  }, [comments]);

  const handleSaveComment = (newComment) => {
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments)); // ✅ Save immediately
  };

  return (
    <div>
      <h2>Post</h2>
      <CommentBox onSave={handleSaveComment} />

      <div>
        <h3>Comments:</h3>
        {comments.length === 0 ? <p>No comments yet.</p> : null}
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}