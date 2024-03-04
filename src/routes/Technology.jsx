import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FcWiFiLogo } from "react-icons/fc";
import { IoMenu } from "react-icons/io5";
import CommentForm from "../CommentForm";
import axios from "axios";

// import { XMarkIcon, Bars3BottomRightIcon } from "@heroicons/react/24/outline";

const Technology = () => {
  const [data, setData] = useState(null);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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

  // const people = [
  //   {
  //     name: "Leslie Alexander",
  //     role: "Co-Founder / CEO",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  //     bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
  //     twitterUrl: "#",
  //     linkedinUrl: "#",
  //   },

  //   // More people...
  // ];

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

        <div className="right ">
          {/* <ul> */}
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
          {/* </ul> */}
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
        {/* <div id="mobile">
          <i className="fas fa-bars"></i>
        </div> */}
      </nav>
      <div className="bg-white ">
        <div className="mx-auto   max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <form className=" mt-30  lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section
              aria-labelledby="cart-heading"
              className="lg:col-span-8 ml-2"
            >
              {data &&
                data.ads &&
                data.ads.map((ad) => (
                  <ul
                    key={ad._id}
                    role="list"
                    className="divide-y mt-9 divide-gray-900 bg-sky-100 border-b border-t border-gray-200"
                  >
                    <img
                      src={ad.imgUrl}
                      alt={ad.name} // Add alt text for accessibility
                      className="mx-auto" // Center the image
                    />
                  </ul>
                ))}
              <h6 className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis placeat!
              </h6>
              <hr />

              <ul role="list" className=" border-gray-200 text-sm ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Cupiditate, nobis modi. Dolorem quod iste pariatur commodi
                voluptatem quaerat? Reiciendis in labore ducimus pariatur quia
                voluptatem facilis molestias voluptatum dignissimos perferendis?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tenetur cupiditate molestiae ipsum, aliquam vel obcaecati quas
                ratione sit recusandae est dolor libero fugiat nulla facilis
                iste natus nostrum velit modi! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                optio officia, error similique repellat molestias? Repellendus
                est porro itaque quos nesciunt,
                <br /> vitae earum iusto beatae fugit doloribus maiores
                perspiciatis quo.
              </ul>

              <div>
                <div className=" gap-4 sm:grid-cols-2">
                  <div className="space-y-16  pt-10 lg:pt-16">
                    <div
                      // key={feature.name}
                      className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8"
                    >
                      <div className="mt-6 lg:col-span-8  text-sm  text-gray-900 lg:mt-0">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Tenetur cupiditate molestiae ipsum, aliquam vel
                        obcaecati quas ratione sit recusandae est dolor libero
                        fugiat nulla Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Cupiditate, nobis modi. Dolorem quod
                        iste pariatur commodi voluptatem quaerat? Reiciendis in
                        labore ducimus pariatur quia voluptatem facilis
                        molestias voluptatum dignissimos perferendis? Lorem
                        ipsum, dolor sit amet consectetur adipisicing elit.
                        Tenetur cupiditate molestiae ipsum, aliquam vel
                        obcaecati quas ratione sit recusandae est dolor libero
                        fugiat nulla facilis iste natus nostrum velit modi!
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Voluptas error aperiam illum nostrum unde ad qui
                        repudiandae sit sunt recusandae! Iusto sint deserunt
                        esse ipsam odio accusantium dolor perspiciatis commodi.
                      </div>
                      <div className="lg:col-span-4">
                        {data &&
                          data.ads &&
                          data.ads.map((ad) => (
                            <div
                              key={ad._id}
                              className="aspect-h-1    bg-sky-100 sm:aspect-h-2 sm:aspect-w-5"
                            >
                              <img
                                src={ad.imgUrl}
                                alt={ad.name} // Add alt text for accessibility
                                className="mx-auto" // Center the image
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />

              <h5 className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                non distinctio illo placeat earum aliquam. Lorem ipsum dolor,
                sit amet consectetur adipisicing elit?
              </h5>
            </section>

            {/* Order summary */}
            <section
              aria-labelledby="summary-heading"
              className="mt-10 rounded-lg  -mr-7    py-6 sm:py-32  gap-x-4 gap-y-8 px-4 -mb-40   sm:p-6 lg:col-span-4 lg:mt-0 lg:p-8"
            >
              <div className=" bg-sky-100">
                <h2
                  id="summary-heading"
                  className="text-lg font-medium text-center   bg-blue-400 text-gray-100"
                >
                  Live Update
                </h2>

                <dl className="mt-6 space-y-4  ml-4 mr-4 gap-x-4 mb-6 ">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-900">
                      15/01/23
                      <br /> Lorem ipsum dolor sit amet consectetur adipisicing
                      elit.
                    </dt>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-300 pt-4">
                    <dt className="flex items-center text-sm text-gray-900">
                      <span>
                        15/01/23
                        <br /> Lorem ipsum dolor sit amet consectetur
                        adipisicing elit.
                      </span>
                    </dt>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-300 pt-4">
                    <dt className="flex text-sm text-gray-900">
                      <span>
                        15/01/23
                        <br /> Lorem ipsum dolor sit amet consectetur
                        adipisicing elit.
                      </span>
                    </dt>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-300 pt-4">
                    <dt className="flex text-sm text-gray-900"></dt>
                  </div>
                </dl>
              </div>
              <div className="bg-sky-100">
                {data &&
                  data.ads &&
                  data.ads.map((ad) => (
                    <dl key={ad._id} className="mt-6 space-y-4 mb-6">
                      {/* <br />
                      <br /> */}
                      <img
                        src={ad.imgUrl}
                        alt={ad.name} // Add alt text for accessibility
                        className="mx-auto" // Center the image
                      />
                    </dl>
                  ))}
              </div>

              <div className="bg-sky-10">
                {data &&
                  data.ads &&
                  data.ads.map((ad) => (
                    <dl key={ad._id} className="mt-6 space-y-4 mb-6">
                      <img
                        src={ad.imgUrl}
                        alt={ad.name} // Add alt text for accessibility
                        className="mx-auto" // Center the image
                      />
                    </dl>
                  ))}
              </div>
            </section>
          </form>
        </div>
      </div>
      <div>
        <h1 className=" ml-32 mr-10 -mt- 8 ">TALK OF TOWN</h1>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* <div className="mx-auto max-w-2xl sm:text-center"></div> */}
            <ul
              role="list"
              className="mx-auto -mt-20 grid max-w-2xl ml-2  grid-cols-1 gap-x-2 gap-y-10 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
            >
              {data &&
                data.posts &&
                data.posts.map((post) => (
                  <li
                    key={post._id}
                    className="flex flex-col gap-6 xl:flex-row  border-t border-gray-300"
                  >
                    <img
                      className="h-28 w-36 flex-none  object-cover"
                      src={post.img_url} // Corrected property name
                      alt={post.title}
                    />

                    <div className="flex-auto">
                      {/* <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                      {person.name}
                    </h3> */}
                      <p className="text-base leading-7 mb-24 text-gray-600">
                        {post.title}
                      </p>
                      <p className="-mt-24 text-sm leading-7 text-gray-600">
                        {/* {person.bio} */}
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Tenetur cupiditate molestiae ipsum, aliquam vel
                        obcaecati quas ratione sit recusandae est dolor libero
                        fugiat nulla
                      </p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>

      <CommentForm />
    </div>
  );
};

export default Technology;
