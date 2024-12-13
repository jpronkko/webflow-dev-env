import Splide from "@splidejs/splide";

document.addEventListener("DOMContentLoaded", () => {
  // Change heading on button click
  const button = document.querySelector("#button");
  if (!button) return;

  button.addEventListener("click", () => {
    const heading = document.querySelector("#heading");
    if (!heading) return;
    heading.textContent = "Build with TypeScript and tsc!!!";
  });

  // Setup Splide slider
  var splide = new Splide(".splide", {
    type: "loop",
    perPage: 4,
  });
  splide.mount();
});
