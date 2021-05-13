// mobile menu
const burgerIcon = document.querySelector("#burger");
const navBarMenu = document.querySelector("#nav-links");

burgerIcon.addEventListener("click", () =>
  navBarMenu.classList.toggle("is-active")
);

// tabs
const tabs = document.querySelectorAll(".tabs li");
const tabContentBoxes = document.querySelectorAll("#tab-content > div");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");
    const target = tab.dataset.target;
    tabContentBoxes.forEach((box) => {
      box.getAttribute("id") === target
        ? box.classList.remove("is-hidden")
        : box.classList.add("is-hidden");
    });
  });
});
