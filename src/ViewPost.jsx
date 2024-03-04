import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTc5Y2NkZTE3NmJhZmNlNTBhOGZmNGMiLCJpYXQiOjE3MDYxNDIxNTB9.-USN10AVnjtYJnxW4eJJ4-tUxSkAArhUWcsDqY3eWRI"; // Replace with your actual access token

        const response = await axios.get(
          `https://blog-api-x1gi.onrender.com/api/posts/${postId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);

        if (response && response.data) {
          const postData = response.data.post; // Access the 'post' object
          setPost(postData);
        } else {
          console.error("API response does not contain data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [postId]);

  return (
    <div>
      {post ? (
        <div className="blog-post">
          {post.imgName && <img src={post.imgName} alt={post.title} />}
          <h2 className="blog-title">{post.title}</h2>
          <p className="blog-content">{post.content.join("\n")}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ViewPost;
