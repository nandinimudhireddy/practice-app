const Postlist = ({ posts, handleDelete }) => {
  return (
    <div>
      {posts.map((posts) => (
        <div className="postpreview" key={posts.id}>
          <h1>{posts.title}</h1>
          <h2>Written by {posts.author}</h2>
          <button
            onClick={() => {
              handleDelete(posts.id);
            }}
          >
            Delete!
          </button>
        </div>
      ))}
      ;
    </div>
  );
};

export default Postlist;
