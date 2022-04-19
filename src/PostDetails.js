import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const {
    data: posts,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/posts/" + id);
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch("http://localhost:8000/posts/" + posts.id, {
      method: 'DELETE',
    }).then(() => {
      navigate("/");
    });
  };


  return (
    <div className="postdetails">
      {isLoading && <div>Loading..</div>}
      {error && <div>{error}</div>}
      {posts && (
        <article>
          <h2>{posts.title}</h2>
          <p>{posts.author}</p>
          <div>{posts.body}</div>
        </article>
      )}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default PostDetails;
