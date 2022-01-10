const btns = document.querySelectorAll("button");
const divs = document.querySelectorAll(".cheveron-text");
const cheveronIcons = document.querySelectorAll(".cheveron-icon");
const titles = document.querySelectorAll(".question");

function hide(index) {
  const currentDiv = divs[index];
  const title = titles[index];
  const currentCheveronIcon = cheveronIcons[index];
  const hidden = currentDiv.classList.contains("max-h-0");

  if (hidden) {
    currentDiv.classList.remove("max-h-0");
    currentDiv.classList.add("max-h-20");
    title.classList.add("font-bold", "text-veryDarkBlue");
    currentCheveronIcon.classList.toggle("rotate-180");
    return;
  }
  currentDiv.classList.remove("max-h-20");
  currentDiv.classList.add("max-h-0");
  title.classList.remove("font-bold", "text-veryDarkBlue");
  currentCheveronIcon.classList.toggle("rotate-180");
  return;
}

btns.forEach((btn, indx) => btn.addEventListener("click", () => hide(indx)));
