import { useState } from "react";
import Game from "./Components/Game";

function App() {
  let [isVisible, setIsVisible] = useState(false);

  const startClick = () => {
    setIsVisible(true);
  };
  return (
      <div className="flex h-screen">
        <div className="flex flex-col items-center w-2/4">
          <button
            className="bg-yellow-400 px-24 py-3 my-4 text-2xl"
            onClick={startClick}
          >
            Start
          </button>
          {isVisible && <Game setIsVisible={setIsVisible}/>}
        </div>
        <img
          className="py-24"
          width="450px"
          src="https://c.tenor.com/pw9ZsUdsEYgAAAAj/capoo-blue-cat.gif"
        ></img>
      </div>
  );
}

export default App;
