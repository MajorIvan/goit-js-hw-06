const inputRef = document.querySelector("#validation-input");

const onInputBlur = () => {
  const inputValue = inputRef.value;
  const validLength = Number(inputRef.getAttribute("data-length"));

  if (inputValue.length === validLength) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
};

inputRef.addEventListener("blur", onInputBlur);