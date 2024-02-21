import React from "react";
import Blog from "../Blog";
import Link from "next/link";

const Blogs = () => {
  return (
    <div
      className="w-screen h-[calc(100vh-64px)]  py-10 flex items-center"
      id="blogs"
    >
      <div className="wrapper sm:w-4/5 w-full mx-auto h-auto">
        <h1 className="mb-4 ms-4 sm:ms-0 text-4xl font-medium tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white font-degular">
          ...Blogs
        </h1>
        <div className="blogs flex items-center flex-nowrap overflow-x-scroll border-double border-y-4 h-full my-10 px-3 divide-x">
          <style scoped>
            {`
              .blogs::-webkit-scrollbar {
                display : none;
              }
              .blogs {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}
          </style>
          <Blog
            title={"A Few Thoughts on Spending Money"}
            date={"21 Jan, 2024"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores ipsum eos temporibus ea nihil."
            }
          />
          <Blog
            title={"A Few Thoughts on Spending Money"}
            date={"21 Jan, 2024"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores ipsum eos temporibus ea nihil."
            }
          />
          <Blog
            title={"A Few Thoughts on Spending Money"}
            date={"21 Jan, 2024"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores ipsum eos temporibus ea nihil."
            }
          />
          <Blog
            title={"A Few Thoughts on Spending Money"}
            date={"21 Jan, 2024"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores ipsum eos temporibus ea nihil."
            }
          />
          <Blog
            title={"A Few Thoughts on Spending Money"}
            date={"21 Jan, 2024"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores ipsum eos temporibus ea nihil."
            }
          />
          <Blog
            title={"A Few Thoughts on Spending Money"}
            date={"21 Jan, 2024"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores ipsum eos temporibus ea nihil."
            }
          />
        </div>
        <Link
          href={"https://medium.com/@dhruvwill"}
          target="_blank"
          className="mx-4 inline-block sm:mx-0 border-background bg-foreground text-background font-medium font-acumin tracking-wider py-2 px-4 rounded-md"
        >
          <div className="flex gap-1">
            <svg className="h-6 w-6" viewBox="0 0 192 192">
              <g fill="none" fillRule="evenodd">
                <path
                  className="dark:stroke-black stroke-white"
                  strokeWidth="12"
                  d="M61.126 56c10.798 0 20.571 4.418 27.646 11.554 7.094 7.155 11.478 17.04 11.478 27.956 0 10.915-4.384 20.8-11.478 27.954-7.075 7.136-16.849 11.554-27.646 11.554-10.798 0-20.572-4.418-27.648-11.554C26.384 116.31 22 106.425 22 95.51c0-10.916 4.384-20.801 11.478-27.956C40.553 60.418 50.328 56 61.126 56Zm72.062 2.666c1.766 0 3.404.768 4.92 1.96 2.18 1.716 4.087 4.273 5.726 7.384 3.706 7.038 5.917 16.775 5.917 27.5 0 10.723-2.21 20.46-5.917 27.498-1.638 3.112-3.545 5.67-5.726 7.385-1.515 1.192-3.153 1.96-4.919 1.96-1.765 0-3.403-.768-4.918-1.96-2.181-1.716-4.088-4.273-5.727-7.384-3.706-7.039-5.917-16.776-5.917-27.5 0-10.722 2.21-20.46 5.917-27.499 1.638-3.111 3.545-5.668 5.726-7.384 1.515-1.192 3.152-1.96 4.918-1.96Z"
                />

                <path
                  className="dark:fill-black fill-white"
                  fillRule="nonzero"
                  d="M168.065 57.128c4.381 0 7.935 17.184 7.935 38.382 0 21.191-3.552 38.381-7.935 38.381-4.384 0-7.934-17.185-7.934-38.381s3.552-38.382 7.934-38.382Z"
                />
              </g>
            </svg>
            ↗
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
