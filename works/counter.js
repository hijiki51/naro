let count = 0;
const countUp = () => {
  count++;
  write();
};

const reset = () => {
  count = 0;
  werite();
};
const write = () => {
  const countElement = document.querySelector("#count");
  countElement.innerText = "回数: " + count;
};
