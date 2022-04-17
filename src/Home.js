import Postlist from "./Postlist";
import { useState } from "react";

const Home = (props) => {
  const [posts, setPosts] = useState([
    { title: "Digital Markrting", author: "Nandu", id: 1 },
    { title: "Tech queries", author: "Nandy", id: 2 },
    { title: "General stuff", author: "Nandu", id: 3 },
  ]);

  const handleDelete = (id) => {
    const newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
  };

  return (
    <div className="home">
      <Postlist posts={posts} handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
