import QuickNote from "./components/quicknote";

function App() {
  return (
    <>
      <h1 className="m-3 ml-5 text-white font-bold text-5xl italic">
        Quick Note
      </h1>
      <div className="text-center">
        <button className="text-white bg-green-700 hover:bg-green-800 px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-wrap">
        <QuickNote />
      </div>
    </>
  );
}

export default App;
