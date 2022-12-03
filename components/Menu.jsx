const Menu = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-100 px-3 py-4 text-black">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <div
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-teal-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 lg:inline-block"
            >
              <path
                fillRule="evenodd"
                d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z"
                clipRule="evenodd"
              />
              <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
            </svg>
            <p className="lg:inline-block ml-1 font-bold">APPLICATIONS</p>
          </div>
          <p className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 text-2xl ml-3">
            |
          </p>

          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-teal-200 font-bold ml-3"
          >
            All Applications
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 block mt-4 lg:inline-block lg:mt-0 hover:text-teal-200 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </a>
        </div>
        <div>
          <button className="block lg:inline-block hover:bg-gray-200 text-gray-800 font-semibold px-2 py-1 border border-gray-400 rounded shadow mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 lg:inline-block"
            >
              <path
                fillRule="evenodd"
                d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <button className="block lg:inline-block hover:bg-gray-200 text-gray-800 font-semibold px-2 py-1 border border-gray-400 rounded shadow mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 lg:inline-block text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
          <button className="block lg:inline-block hover:bg-gray-200 text-gray-800 font-semibold px-2 py-1 border border-gray-400 rounded shadow mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 lg:inline-block text-gray-500"
            >
              <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
              <path
                fillRule="evenodd"
                d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="block lg:inline-block hover:bg-gray-200 text-gray-800 font-semibold px-2 py-1 border border-gray-400 rounded shadow mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 lg:inline-block text-gray-500"
            >
              <path
                fillRule="evenodd"
                d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <p className="block lg:inline-block ml-2">
            <svg
              className="w-5 h-5 lg:inline-block text-gray-500"
              viewBox="0 0 1024 1024"
              version="1.1"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M932.096 768l-179.008 182.4c-0.128 0.128-0.384 0.192-0.512 0.32-2.88 2.88-9.6 5.184-13.376 6.784-3.392 1.344-0.64 1.856-4.096 2.112-0.768 0-1.344 0.384-1.984 0.384-0.512 0-0.896-0.256-1.344-0.256-3.904-0.192-5.76-0.896-9.344-2.24-3.264-1.344-6.016-3.52-8.64-5.76-0.64-0.512-1.472-0.768-2.112-1.344L519.168 768c-12.864-12.8-6.976-33.6 5.952-46.4 12.736-12.864 33.6-12.864 46.4 0L704 847.872 704.128 161.92c0-18.752 12.736-33.984 30.848-33.92 18.112-0.064 27.776 15.168 27.776 33.984l0 685.888 128.768-126.272c12.864-12.864 33.6-12.864 46.528 0 6.4 6.4 3.776 14.72 3.776 23.168S938.496 761.6 932.096 768zM370.624 449.152 401.28 513.344C404.736 521.024 409.6 527.616 416 533.248c6.4 5.504 16.192 8.128 29.44 7.744 6.4 0 12.352-0.896 17.92-2.624 5.504-1.728 10.112-4.288 13.76-7.744C480.768 527.104 483.008 522.88 483.84 517.632c0.896-5.12 0-11.392-2.56-18.688L348.16 151.616C346.048 145.472 341.44 140.032 334.4 135.168 327.424 130.432 317.888 128 305.984 128 293.952 128 284.544 130.432 277.44 135.168c-7.04 4.8-11.648 10.304-13.76 16.448L131.84 497.728C125.888 513.472 126.848 524.608 134.72 531.2 142.656 537.728 153.216 540.992 166.4 540.992c13.248 0 23.232-2.816 30.144-8.384C203.328 527.04 208.64 519.68 212.544 510.528L240.64 449.152 370.624 449.152zM256.64 384l49.344-128 49.28 128L256.64 384zM188.864 640c-8.576 0-16.192 2.304-23.04 6.848-6.784 4.608-10.176 12.224-10.176 22.784 0 10.944 3.648 18.624 10.88 23.04s14.656 6.656 22.4 6.656l167.68 0-216.32 224.256c-4.672 5.824-7.04 11.136-7.04 15.872 0 5.12 3.008 9.856 9.024 14.144C148.096 957.888 155.136 960 163.2 960l269.504 0c7.616 0 15.104-2.24 22.4-6.656 7.232-4.48 10.88-12.096 10.88-23.04 0-10.56-3.456-18.176-10.24-22.784s-14.528-6.848-22.976-6.848l-183.04 0 216.96-224.256c6.016-7.488 9.024-13.888 9.024-19.008 0-4.032-2.816-8-8.384-11.776C461.696 641.856 455.552 640 448.704 640L188.864 640z" />
            </svg>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
