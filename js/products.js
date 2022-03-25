window.addEventListener("DOMContentLoaded", init);
function init(event) {
  getData();
}
async function getData() {
  let result = await fetch(
    "http://andresbernadou.com/bikeweb/index.php/wp-json/wp/v2/bike"
  );
  handleBikes(await result.json());
}
// function showBikes(bikes) {
//   //   console.log(bikes);
// }
function handleBikes(bikes) {
  bikes.forEach(displayBikes);
}
function displayBikes(bike) {
  console.log(bike);
  //grab template

  const template = document.querySelector("#productTemplate").content;

  //clone it

  const copy = template.cloneNode(true);
  copy.querySelector(".p-brand ").textContent = bike.brand;
  copy.querySelector(".p-name").textContent = bike.model;
  copy.querySelector(".p-price span").textContent = bike.price;
  copy.querySelector(".p-stock span").textContent = bike.stock;
  copy.querySelector(".productCardImage").setAttribute("src", bike.image.guid);

  const parent = document.querySelector("main article");

  parent.appendChild(copy);
}
