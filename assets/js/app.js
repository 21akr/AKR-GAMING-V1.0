const sett = document.querySelector(".sett");
const start = document.querySelector(".start");
const mainMenu = document.querySelector(".main-menu");
const main = document.querySelector(".main");
const settParent = document.querySelector(".sett-parent");
const characters = document.querySelector(".characters");

// FUNCTIONS
function mMenu() {
  mainMenu.style = `
  display: none;
  `;
}

start.addEventListener("click", () => {
  mMenu();

  settParent.style = `
  display: inherit;
  `;

  main.style = `
  animation: road 2s infinite linear;
  `;
});

window.addEventListener("keydown", (event) => {
  if (event.code == "Space") {
    sett.style = `
    bottom: 200px;
  `;
    setTimeout(() => {
      sett.style = `
    bottom: 30px;
  `;
    }, 200);
  }
});

characters.addEventListener("click", () => {
  mMenu();
  main.style = `
  animation: road 2s infinite ease-in-out;
  `;
});
