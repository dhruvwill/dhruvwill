import Link from "next/link";
import React from "react";

const Social = () => {
  return (
    <div
      className="bg-background text-foreground h-[calc(100vh-64px)] flex items-center"
      id="social"
    >
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            Get in touch
          </h2>

          <p className="mx-auto mt-4 max-w-md text-gray-500 dark:text-gray-400">
            The One Ring to Rule Them All... (My Inbox)
          </p>
          <div className="mt-5 flex items-center ">
            <ul className=" mx-auto flex justify-center border-t border-gray-500 pt-5 gap-3 sm:mt-0">
              <li>
                <Link
                  href="https://www.linkedin.com/in/dhruvwill/"
                  target="_blank"
                  className="group select-none rounded-lg border border-gray-900 dark:border-gray-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 dark:text-gray-400 transition-all  focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  <span className="sr-only">Linkedin</span>
                  <svg
                    className="h-6 w-6 fill-current group-hover:fill-[#027bb6]"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M21.5 0h-19C1.121 0 0 1.121 0 2.5v19C0 22.879 1.121 24 2.5 24h19c1.379 0 2.5-1.121 2.5-2.5v-19C24 1.121 22.879 0 21.5 0zM7 19H4V9h3v10zm-1.5-11C5.121 8 4 6.879 4 5.5S5.121 3 6.5 3 9 4.121 9 5.5 7.879 8 6.5 8zm13 11h-3v-5.586c0-1.33-.253-2.336-1.773-2.336-1.777 0-2.047 1.385-2.047 2.821V19h-3V9h3v1.688C13.352 8.383 14.688 7 16.867 7 19.602 7 21 9.086 21 12.164V19z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.github.com/dhruvwill/"
                  target="_blank"
                  className="inline-block group select-none rounded-lg border border-gray-900 dark:border-gray-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 dark:text-gray-400 transition-all  focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  <span className="sr-only">GitHub</span>

                  <svg
                    className="h-6 w-6 fill-current group-hover:fill-[#6e5494]"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href={"https://instagram.com/dhruvwill/"}
                  target="_blank"
                  className="inline-block group select-none rounded-lg border border-gray-900 dark:border-gray-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 dark:text-gray-400 transition-all  focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  <span className="sr-only">Instagram</span>

                  <svg
                    className="h-6 w-6 fill-current group-hover:fill-red-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href={"https://twitter.com/dhruvwill/"}
                  target="_blank"
                  className="inline-block group select-none rounded-lg border border-gray-900 dark:border-gray-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 dark:text-gray-400 transition-all  focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  <span className="sr-only">Twitter</span>

                  <svg
                    className="h-6 w-6 fill-current group-hover:fill-[#1ea1f2]"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
          <Link
            href="mailto:ddyhs25@gmail.com"
            target="_blank"
            className="group mt-8 inline-block rounded-full border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
          >
            <div className="flex items-center">
              <svg
                className="inline-block -ml-2 mr-2 h-6 w-6 transition-transform group-hover:rotate-45	 fill-current"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
              <span>Mail Me!</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Social;
