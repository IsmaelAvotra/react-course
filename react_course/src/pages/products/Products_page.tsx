import { useEffect, useState, useContext } from "react";
import "./Products.css";
import { AppContext } from "../../App";

interface Post {
  id: number;
  title: string;
  body: string;
}

const ProductsPage = () => {
  const { username } = useContext(AppContext);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    let isCanceled = true;
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        if (!isCanceled) {
          setPosts(data);
        }
      });

    return () => {
      isCanceled = false;
    };
  }, []);

  return (
    <div className="products">
      <h2>Products page for {username}</h2>
      {posts?.map((post) => (
        <p key={post.id}> - {post.title}</p>
      ))}
    </div>
  );
};

export default ProductsPage;
