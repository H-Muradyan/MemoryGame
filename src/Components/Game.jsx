import React, { useEffect, useState } from "react";
import {
  drawGame,
  showCurrentBox,
  updateBoxColors,
  updateLevel,
} from "./const";

export default function Game({setIsVisible}) {
  const [setNumbers, setSetNumbers] = useState(new Set());
  const [getNumbers, setGetNumbers] = useState([]);
  const [results, setResults] = useState({
    count: 1,
    level: 1,
    result: 0,
    click: false,
    isTrue: null,
  });
  const { count, level, result, click, isTrue } = results;

  for (let i = 0; setNumbers.size < count; i++) {
    setSetNumbers(setNumbers.add(Math.trunc(Math.random() * 12)));
  }

  const getNumber = (number) => {
    setGetNumbers([...getNumbers, number]);
  };

  const tryAgain = () => {
    setIsVisible(false)
  }

  useEffect(() => {
    for (let i = 0; i < getNumbers.length; i++) {
      if ([...setNumbers][i] === getNumbers[i]) {
        document.getElementById(getNumbers[i]).style.backgroundColor = "green";
        if ([...setNumbers].length === getNumbers.length) {
          updateLevel(setGetNumbers, setSetNumbers, setResults, results);
          setResults((prevState) => ({ ...prevState, result: result + 1 }));
          setResults((prevState) => ({ ...prevState, isTrue: true }));
        }
      } else {
        document.getElementById(getNumbers[i]).style.backgroundColor = "red";
        updateLevel(setGetNumbers, setSetNumbers, setResults, results);
        setResults((prevState) => ({ ...prevState, isTrue: false }));
        break;
      }
    }
  }, [getNumbers.length]);

  useEffect(() => {
    setTimeout(() => {
      setResults((prevState) => ({ ...prevState, isTrue: null }));
      updateBoxColors("div");
    }, 500);
    showCurrentBox(setNumbers, setResults);
  }, [count, level]);

  return (
    <>
      {level > 15 ? (
        <div>
          <h2 className="font-bold text-5xl my-36 flex flex-col items-center">
            <div className="mb-4">Your Score</div>
            {result} / {level - 1}
          </h2>
          <button onClick={tryAgain} className="bg-yellow-400 px-20 py-3 my-4 text-2xl">Try Again</button>
        </div>
      ) : (
        <>
          <h2 className="font-bold text-3xl mb-4 text-black">
            Level {level}
            <span className={`${isTrue ? "text-green-600" : "text-red-700"}`}>
              {isTrue !== null && isTrue && " Win"}{" "}
              {isTrue !== null && !isTrue && " Fail"}
            </span>
          </h2>
          <div id="general" className="grid grid-cols-3 gap-3">
            {drawGame.map((elem, index) => {
              return (
                <div
                  key={index}
                  id={index}
                  onClick={() => click && getNumber(index)}
                  className={`border-4 border-lime-400 w-24 h-24 cursor-pointer`}
                ></div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
