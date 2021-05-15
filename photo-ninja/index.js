const sidenav = document.querySelector(".sidenav");
const lightboxes = document.querySelectorAll(".materialboxed");
const parallaxes = document.querySelectorAll(".parallax");
const tabs = document.querySelector(".tabs");
const datepicker = document.querySelector(".datepicker");

M.Sidenav.init(sidenav);
M.Materialbox.init(lightboxes);
M.Parallax.init(parallaxes);
M.Tabs.init(tabs);
M.Datepicker.init(datepicker, { disableWeekends: true });
