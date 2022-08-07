export const drawGame = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

export const showCurrentBox = async function (data, setAfg) {
  setAfg((prevState) => ({ ...prevState, click: false }));
  for (let i = 0; i < [...data].length; i++) {
    let index = await currentBox([...data][i]);
    document.getElementById(index).style.backgroundColor = "yellow";
    setTimeout(() => {
      document.getElementById(index).style.backgroundColor = "transparent";
    }, 500);
  }
  setAfg((prevState) => ({ ...prevState, click: true }));
};

function currentBox(index) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(index), 1000);
  });
}

export const updateLevel = (setGetNumbers, setSetNumbers, setAfg, afg) => {
  const { count, level } = afg;
  setGetNumbers([]);
  setSetNumbers(new Set());
  count < 6 && setAfg((prevState) => ({ ...prevState, count: count + 1 }));
  setAfg((prevState) => ({ ...prevState, level: level + 1 }));
};

export const updateBoxColors = function (tag) {
  let tags = document.getElementsByTagName(tag);
  for (let i = 0; i < tags.length; i++) {
    tags[i].style.backgroundColor = "transparent";
  }
};
