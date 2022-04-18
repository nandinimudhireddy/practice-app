const Postlist = ({ posts, title, handleDelete }) => {
  return (
    <div>
      <h1>{title}</h1>
      {posts.map((posts) => (
        <div className="postpreview" key={posts.id}>
          <h2>{posts.title}</h2>
          <h3>Written by {posts.author}</h3>
          <button
            onClick={() => {
              handleDelete(posts.id);
            }}
          >
            Delete!
          </button>
        </div>
      ))}
    </div>
  );
};

export default Postlist;
