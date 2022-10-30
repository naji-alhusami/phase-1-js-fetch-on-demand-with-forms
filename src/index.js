const init = () => {
  const formTag = document.querySelector("form");

  formTag.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("input#searchByID");

    console.log(input.value);

    fetch(`http://localhost:3000/movies/${input.value}`)
      .then((response) => response.json())
      .then((data) => {
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        title.innerText = data.title;
        summary.innerText = data.summary;
      });
  });
};

document.addEventListener("DOMContentLoaded", init);

/* const butt = document.getElementById("lib-button");

function makeMadLib() {
  const noun = document.getElementById("noun").value;
  const adj = document.getElementById("adjective").value;
  const somName = document.getElementById("person").value;
  const storyDiv = document.getElementById("story");

  return storyDiv.innerHTML = ${noun} ${adj} ${somName};
}

butt.addEventListener('click', () => {
  makeMadLib();
}); */
