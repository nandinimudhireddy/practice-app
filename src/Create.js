import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Nandu");
  const [ispending, setIspending] = useState(false);
  const navigate = useNavigate("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { title, body, author };
    setIspending(true);
    fetch("http://localhost:8000/posts", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(post),
    }).then(() => {
      setIspending(false);
      navigate("/");
    });
    console.log(post);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Post Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        ></input>
        <label>Body Text:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <label>Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Nandu"> Nandu</option>
          <option value="Nandy"> Nandy</option>
        </select>
        {!ispending && <button>Create Post</button>}
        {ispending && <button>Adding Post...</button>}
      </form>
    </div>
  );
};

export default Create;
