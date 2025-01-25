import { useEffect, useState } from "react";

const Logout = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <table key={post.id} border="1">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Post</th>
            </tr>
            <tr>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          </table>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default Logout;
