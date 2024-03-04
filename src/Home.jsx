import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { FcWiFiLogo } from "react-icons/fc";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState(null);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
   const navigate = useNavigate();

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTc5Y2NkZTE3NmJhZmNlNTBhOGZmNGMiLCJpYXQiOjE3MDYxNDIxNTB9.-USN10AVnjtYJnxW4eJJ4-tUxSkAArhUWcsDqY3eWRI";
        const response = await axios.get(
          "https://blog-api-x1gi.onrender.com/api/posts",
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

  if (data && data.posts) {
    console.log("Posts length:", data.posts.length);
    console.log("Posts type:", Object.prototype.toString.call(data.posts));
  } else {
    console.log("Data is null or does not contain posts");
  }

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
      <nav className="navbar-one  ">
        <div className="left  ">
          <span>info@trendinggishgh.com || 02496325789</span>
        </div>

        <div className="header-left">
          <span className="icon">
            <FcWiFiLogo />
          </span>
        </div>

        <div className="right  ">
          {(toggleMenu || screenWidth > 600) && (
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          )}
        </div>
        <button onClick={toggleNav} className="btn">
          <IoMenu />
        </button>
      </nav>

      <nav className="navbar-second  ">
        <ul className="">
          <Link to="/about-us">
            <li>
              <p>NEWS</p>
            </li>
          </Link>
          <Link to="/about-us">
            <li>
              <p>BUSINESS</p>
            </li>
          </Link>

          <Link to="/about-us">
            <li>
              <p>HEALTH</p>
            </li>
          </Link>

          <Link to="/about-us">
            <li>
              <p>SCIENCE</p>
            </li>
          </Link>

          <Link to="/about-us">
            <li>
              <p>TECHNOLOGY</p>
            </li>
          </Link>

          <Link to="/about-us">
            <li>
              <p>SPORTS</p>
            </li>
          </Link>

          <Link to="/about-us">
            <li>
              <p>LIFESTYLE</p>
            </li>
          </Link>

          <Link to="/about-us">
            <li>
              <p>ENTERTAINMENT</p>
            </li>
          </Link>

          <Link to="/about-us">
            <li>
              <p>POLITICS</p>
            </li>
          </Link>
        </ul>
      </nav>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <form className="  lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section
              aria-labelledby="summary-heading"
              className="mt-16 rounded-lg  -ml-6  -mr-10  py-6 sm:py-32  gap-x-4 gap-y-8 px-4 -mb-40   sm:p-6 lg:col-span-3 lg:mt-0 lg:p-8"
            >
              <div className=" bg-sky-100">
                <h2
                  id="summary-heading"
                  className="text-lg font-medium text-center  bg-blue-400 text-gray-100"
                >
                  Live Update
                </h2>

                <dl className="mt-6 space-y-4  ml-4 mr-4 gap-x-4 mb-6 ">
                  <div className="flex items-center justify-between">
                    <Link to="/about-us">
                      <dt className="text-sm text-gray-900">
                        15/01/23
                        <br /> Lorem ipsum dolor sit amet consectetur
                        adipisicing elit.
                      </dt>
                    </Link>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-300 pt-4">
                    <Link to="/about-us">
                      <dt className="flex items-center text-sm text-gray-900">
                        <span>
                          15/01/23
                          <br /> Lorem ipsum dolor sit amet consectetur
                          adipisicing elit.
                        </span>
                      </dt>
                    </Link>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-300 pt-4">
                    <Link to="/about-us">
                      <dt className="flex items-center text-sm text-gray-900">
                        <span>
                          15/01/23
                          <br /> Lorem ipsum dolor sit amet consectetur
                          adipisicing elit.
                        </span>
                      </dt>
                    </Link>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-300 pt-4">
                    <dt className="flex text-sm text-gray-900">
                      <span></span>
                    </dt>
                  </div>
                </dl>
              </div>
              <div className=" ">
                {data &&
                  data.ads &&
                  data.ads.map((ad) => (
                    <Link to="/about-us">
                      <dl key={ad._id} className="  space-y-1 mb-36">
                        <img src={ad.imgUrl} className="mx-auto" />
                      </dl>
                    </Link>
                  ))}
              </div>
            </section>
            <section aria-labelledby="cart-heading" className="lg:col-span-6 ">
              {data &&
                data.ads &&
                data.ads.map((ad) => (
                  <ul
                    key={ad._id}
                    role="list"
                    className="divide-y divide-gray-900  mt-10   sm:mb-10    border-b border-t border-gray-200"
                  >
                    <img
                      src={ad.imgUrl}
                      // alt={ad.name} // Add alt text for accessibility
                      className="mx-auto" // Center the image
                    />
                  </ul>
                ))}

              <h6 className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis !
              </h6>
              {/* {data &&
                data.ads &&
                data.ads.map((ad) => (
                  <ul key={ad._id}>
                   
                    <Link to="/about-us">
                      <img
                        src={ad.imgUrl}
                        // alt={ad.name} // Add alt text for accessibility
                        className="mx-auto" // Center the image
                      />  
                    </Link>
                    
                    
                  </ul>
                ))} */}
              <div>
                <div className=" gap-4 -mt-9 sm:grid-cols-2">
                  <div className="space-y-4 pt-10 lg:pt-16">
                    {data &&
                      data.posts &&
                      data.posts.map((post) => (
                        
                        
                          <div
                            onClick={() => navigate(`/view-post/${post._id}`)}
                            key={post._id}
                            className="flex flex-col-reverse border-t border-gray-300 lg:grid lg:grid-cols-12 lg:gap-x-8"
                          >
                            <div className="lg:col-span-4">
                              <div className="aspect-h-1  sm:aspect-h-2 sm:aspect-w-5">
                                <h1 className="text-center  text-gray-900">
                                  <img
                                    src={post.img_url}
                                    // alt={post.title}
                                    className="w-64 h-28"
                                  />
                                </h1>
                              </div>
                            </div>
                            <div className="mt-6 lg:col-span-8 text-sm text-gray-500 lg:mt-0">
                              <h5 className="text-base text-gray-900">
                                {post.title}
                              </h5>
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Tenetur cupiditate molestiae
                              ipsum, aliquam vel obcaecati quas ratione sit
                              recusandae est dolor libero fugiat nulla
                              {/* {post.content} */}
                            </div>
                          </div>
                        
                      ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Order summary */}
            <section
              aria-labelledby="summary-heading"
              className="mt-16 rounded-lg  -mr-7 -ml-10   py-6 sm:py-32  gap-x-4 gap-y-8 px-4 -mb-40   sm:p-6 lg:col-span-3 lg:mt-0 lg:p-8"
            >
              <div className=" bg-sky-100">
                <h2
                  id="summary-heading"
                  className="text-lg font-medium text-center  bg-blue-400 text-gray-100"
                >
                  Politics
                </h2>

                <dl className="mt-6 space-y-4  ml-4 mr-4 gap-x-4 mb-6 ">
                  <div className="flex items-center justify-between">
                    <Link to="/about-us">
                      <dt className="text-sm text-gray-900">
                        15/01/23
                        <br /> Lorem ipsum dolor sit amet consectetur
                        adipisicing elit.
                      </dt>
                    </Link>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-300 pt-4">
                    <Link to="/about-us">
                      <dt className="flex items-center text-sm text-gray-900">
                        <span>
                          15/01/23
                          <br /> Lorem ipsum dolor sit amet consectetur
                          adipisicing elit.
                        </span>
                      </dt>
                    </Link>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-300 pt-4">
                    <Link to="/about-us">
                      <dt className="flex text-sm text-gray-900">
                        <span>
                          15/01/23
                          <br /> Lorem ipsum dolor sit amet consectetur
                          adipisicing elit.
                        </span>
                      </dt>
                    </Link>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-300 pt-4">
                    <dt className="flex text-sm text-gray-900"></dt>
                  </div>
                </dl>
              </div>

              <div className=" bg-sky-100">
                <h2
                  id="summary-heading"
                  className="text-lg font-medium text-center  bg-blue-400 text-gray-100"
                >
                  Sports
                </h2>

                <dl className="mt-6 space-y-4  ml-4 mr-4 gap-x-4 mb-6 ">
                  <div className="flex items-center justify-between">
                    <Link to="/about-us">
                      <dt className="text-sm text-gray-900">
                        15/01/23
                        <br /> Lorem ipsum dolor sit amet consectetur
                        adipisicing elit.
                      </dt>
                    </Link>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-300 pt-4">
                    <Link to="/about-us">
                      <dt className="flex items-center text-sm text-gray-900">
                        <span>
                          15/01/23
                          <br /> Lorem ipsum dolor sit amet consectetur
                          adipisicing elit.
                        </span>
                      </dt>
                    </Link>
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-300 pt-4">
                    <Link to="/about-us">
                      <dt className="flex text-sm text-gray-900">
                        <span>
                          15/01/23
                          <br /> Lorem ipsum dolor sit amet consectetur
                          adipisicing elit.
                        </span>
                      </dt>
                    </Link>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-300 pt-4">
                    <dt className="flex text-sm text-gray-900"></dt>
                  </div>
                </dl>
              </div>
              <div className=" bg-sky-100">
                <h2
                  id="summary-heading"
                  className="text-lg font-medium text-center  bg-blue-400 text-gray-100"
                >
                  Technology
                </h2>

                <dl className="mt-6 space-y-4  ml-4 mr-4 gap-x-4 mb-6 ">
                  <div className="flex items-center justify-between">
                    <Link to="/about-us">
                      <dt className="text-sm text-gray-900">
                        15/01/23
                        <br /> Lorem ipsum dolor sit amet consectetur .
                      </dt>
                    </Link>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-300 pt-4">
                    <Link to="/about-us">
                      <dt className="flex items-center text-sm text-gray-900">
                        <span>
                          15/01/23
                          <br />
                          Lorem ipsum dolor sit amet consectetur.
                        </span>
                      </dt>
                    </Link>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-300 pt-4">
                    <Link to="/about-us">
                      <dt className="flex text-sm text-gray-900">
                        <span>
                          15/01/23
                          <br /> Lorem ipsum dolor sit amet consectetur.
                        </span>
                      </dt>
                    </Link>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-300 pt-4">
                    <dt className="flex text-sm text-gray-900"></dt>
                  </div>
                </dl>
              </div>
            </section>
          </form>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
