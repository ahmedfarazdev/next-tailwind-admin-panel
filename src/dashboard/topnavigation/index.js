import { useToggle } from '../provider/context';

export default function TopNavigation() {
  const { toggle, setIsLogin } = useToggle();


  const handleLogOut = () => {
    sessionStorage.setItem('email', '');
    sessionStorage.setItem('pasword', '');
    setIsLogin(false);

  }



  return (
    <header className="bg-white h-16 items-center relative shadow w-full z-10 md:h-20 lg:rounded-2xl">
      <div className="flex flex-center flex-col h-full justify-center mx-auto px-3 relative">
        <div className="flex items-center pl-1 relative w-full sm:pr-2 sm:ml-0 lg:max-w-68">
          <div className="flex h-full left-0 relative w-3/4">
            <div className="group flex items-center h-full relative w-12">
              <button
                type="button"
                aria-expanded="false"
                aria-label="Toggle sidenav"
                className="text-4xl text-gray-500 focus:outline-none"
                onClick={toggle}
              >
                &#8801;
              </button>
            </div>
            <div className="flex group h-full items-center relative w-36 lg:w-64">
              <div className="absolute block cursor-pointer flex h-10 items-center justify-center p-3 pr-2 text-gray-500 text-sm uppercase w-auto sm:hidden">

                <svg
                  fill="none"
                  className="h-5 relative w-5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <svg
                className="absolute fill-current h-4 hidden left-0 ml-4 pointer-events-none text-gray-500 w-4 group-hover:text-gray-400 sm:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
              </svg>
              <input
                type="text"
                className="bg-gray-100 block leading-normal pl-10 py-1.5 pr-4 ring-opacity-90 rounded-2xl text-gray-400 w-full focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search"
              />
              <div className="absolute border border-gray-300 h-auto hidden mr-2 px-2 py-1 right-0 rounded-2xl text-gray-400 text-xs md:block">
                +
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end ml-5 p-1 relative w-1/4 sm:mr-0 sm:right-auto">
            <a href="#" className="block relative">
              <img
                alt="Jonathan Ilunga"
                src="https://res.cloudinary.com/beloved/image/upload/v1623599101/Assets/ilunga_xrvvfm.jpg"
                className="h-10 mx-auto object-cover rounded-full w-10"
              />
            </a>
            <button className='btn' onClick={handleLogOut}>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
