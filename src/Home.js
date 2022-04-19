import Postlist from "./Postlist";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: posts,
    isloading,
    error,
  } = useFetch('http://localhost:8000/posts');
  
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isloading && <div>Loading..</div>}
      {posts && <Postlist posts={posts} title="All articles!" />}
    </div>
    
  );
};


export default Home;
