const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");
const contenedor = document.getElementById("container");

// Vector para almacenar los usuarios
let userList = [];
// let max = 1000000,
//   min = 1,
//   money;
//formatMoney(money);

// Función que obtiene de la API un nombre aleatorio,
// genera una cantidad de dinero aleatoria cuyo máximo es 1.000.000
// y añade al usuario con ambos datos
async function getRandomUser() {
  let res = await fetch("https://randomuser.me/api");
  let data = await res.json();
  let user = data.results[0];
  let newUser = {
    name: user.name.first + " " + user.name.last,
    money: Math.floor(Math.random() * 1000000),
  };

  console.log(user);
  addData(newUser);
  updateDOM();
}

// TODO: Función que añade un nuevo usuario (objeto) al listado de usuarios (array)
function addData(obj) {
  userList.push(obj);
}

// TODO: Función que dobla el dinero de todos los usuarios existentes
function doubleMoney() {
  // TIP: Puedes usar map()
  userList.map(function (user) {
    user.money *= 2
  });
  updateDOM();
}

// TODO: Función que ordena a los usuarios por la cantidad de dinero que tienen
function sortByRichest() {
  // TIP: Puedes usar sort()
  userList.sort((x, y) => y.money - x.money);
  updateDOM();
}

// TODO: Función que muestra únicamente a los usuarios millonarios (tienen más de 1.000.000)
function showMillionaires() {
  // TIP: Puedes usar filter()
  let userListF = userList.filter(user => user.money > 1000000 );
  userList = userListF;
  updateDOM();
}

// TODO: Función que calcula y muestra el dinero total de todos los usuarios
function calculateWealth() {
  // TIP: Puedes usar reduce ()
  const sumaDinero = userList.reduce(function (total, user) {
    return total + user.money;
  }, 0);
  let h3 = document.createElement("h3");
  h3.innerHTML = "Dinero total: <strong>" + formatMoney(sumaDinero) + "</strong>";
  main.appendChild(h3);
}

// TODO: Función que actualiza el DOM
function updateDOM() {
  while (main.childElementCount > 1) {
    main.removeChild(main.lastChild);
  }
  // TIP: Puedes usar forEach () para actualizar el DOM con cada usuario y su dinero
   userList.forEach((user) => {
    let div1 = document.createElement("div");
    div1.className = "person";
    div1.innerHTML =
      "<strong>" + user.name + "</strong>" + formatMoney(user.money);
    main.appendChild(div1);
  });
}

// Función que formatea un número a dinero
function formatMoney(number) {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,") + "€";
}

// Obtenemos un usuario al iniciar la app
getRandomUser();

// TODO: Event listeners
doubleBtn.addEventListener("click", doubleMoney);
addUserBtn.addEventListener("click", getRandomUser);
showMillionairesBtn.addEventListener("click", showMillionaires);
calculateWealthBtn.addEventListener("click", calculateWealth);
sortBtn.addEventListener("click", sortByRichest);