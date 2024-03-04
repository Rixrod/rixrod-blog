import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./App.css";

function CommentForm() {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  // const [newComment, setNewComment] = useState("");
  const [data, setData] = useState([]);
  const [postId, setPostId] = useState("");
  const [content, setContent] = useState("");

  

  const handleInputChange = (e) => {
    setCommentText(e.target.value);
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTU2ODBmZGNiN2UxOGRkYzkwNWYyY2YiLCJpYXQiOjE3MDEyOTI2OTd9.Hlm7agXnJbPatP8_9k-Ue8gUws6FrsDRj_KveaJlh3w"; // Replace with your access token
        const response = await axios.get(
          "https://blog-api-x1gi.onrender.com/api/comments",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);

        if (response && response.data) {
          const myData = response.data; // Use response.data.comments
          setData(myData);
        } else {
          console.error("API response does not contain data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const handleCommentSubmit = async (e) => {
     e.preventDefault();

     if (!postId || !content) {
       toast.warn("Post ID and comment content are required", {
         // ... (toast configuration)
       });
       return;
     }
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTc5Y2NkZTE3NmJhZmNlNTBhOGZmNGMiLCJpYXQiOjE3MDYxNDIxNTB9.-USN10AVnjtYJnxW4eJJ4-tUxSkAArhUWcsDqY3eWRI";

      const commentData = {
        post_id: postId,
        content: content,
      }; // Replace with your access token
      // Make a POST request to create a new comment
      const response = await axios.post(
        "https://blog-api-x1gi.onrender.com/api/comments",
        commentData,
        // {
        //   content: commentText,
        // },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Response Status:", response.status);
      console.log("Response Data:", response.data);

      if (response.status === 200) {
        // Handle success
        toast.success("Comment added successfully");
        // Clear form fields and state
        setPostId("");
        setContent("");
      } else {
        // Handle unexpected response status codes
        console.error("Unexpected response:", response);
        toast.error("Error adding comment");
      }
    } catch (error) {
      // Handle errors
      console.error("Error adding comment:", error);
      toast.error("Error adding comment");
    }
   
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTc5Y2NkZTE3NmJhZmNlNTBhOGZmNGMiLCJpYXQiOjE3MDYxNDIxNTB9.-USN10AVnjtYJnxW4eJJ4-tUxSkAArhUWcsDqY3eWRI";
        const response = await axios.get(
          "https://blog-api-x1gi.onrender.com/api/ads",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);

        if (response && response.data) {
          const myData = response.data;
          setData(myData);
        } else {
          console.error("API response does not contain data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  if (data) {
    console.log("Data length:", data.length);
  } else {
    console.log("Data is null");
  }
  console.log("Data type:", Object.prototype.toString.call(data));

  if (data && data.ads) {
    console.log("Ads length:", data.ads.length);
    console.log("Ads type:", Object.prototype.toString.call(data.ads));
  } else {
    console.log("Data is null or does not contain posts");
  }


  return (
    <div>
      <div className="  ">
        <div className="mx-auto   max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <form className=" -mt-28  lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section
              aria-labelledby="cart-heading"
              className="lg:col-span-8 ml-2  "
            >
              <div className="bg-gray-200    px-2 py-3 sm:py-4 lg:px-4">
                <div className="h-3 text-start">
                  <button className="reply-button"> LEAVE A REPLY</button>
                </div>
              </div>

              <br />

              {/* ... rest of your component ... */}
              <label>
                <textarea
                  className="comment-input border-t-2 border-r-2 border-l-2 border-b-2 border-sky-500"
                  placeholder="Your comments"
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  // onChange={handleInputChange}
                />
              </label>

              <button
                type="button"
                className="rounded-md bg-sky-500 px-3.5 py-2.5 mt-6 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 float-right"
                onClick={handleCommentSubmit}
              >
                Post Comment
              </button>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
                {Array.isArray(data) &&
                  data.map((comment) => (
                    <div
                      key={comment._id}
                      className="relative flex items-center space-x-3 rounded-lg border border-l-2 border-r-2 border-t-2 border-b-2 border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
                    >
                      <div className="flex-shrink-0"></div>
                      <div className="min-w-0 flex-1">
                        <span className="absolute inset-0" aria-hidden="true" />
                        <p className="text-sm font-medium text-gray-900">
                          {comment.content}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </section>
            <section
              aria-labelledby="summary-heading"
              className="mt-24 rounded-lg  -mr-6    py-6 sm:py-32  gap-x-4 gap-y-8 px-4 -mb-36   sm:p-6 lg:col-span-4 lg:mt-0 lg:p-8"
            >
              <div className="">
                {data &&
                  data.ads &&
                  data.ads.map((ad) => (
                    <dl key={ad._id} className="mt-6 space-y-4 mb-6">
                      <img src={ad.imgUrl} alt={ad.name} className="mx-auto" />
                    </dl>
                  ))}
              </div>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CommentForm;
