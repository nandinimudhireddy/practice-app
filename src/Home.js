import Postlist from "./Postlist";
import { useEffect, useState } from "react";

const Home = (props) => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }, []);
 

  const handleDelete = (id) => {
    const newPosts = posts.filter(post => post.id !== id);
    setPosts(newPosts);
  };
  
  return (
    <div className="home">
      {posts && (
        <Postlist
          posts={posts}
          title="All articles!"
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Home;
