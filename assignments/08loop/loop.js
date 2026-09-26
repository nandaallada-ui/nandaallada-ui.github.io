const carColor = [
  { body: "#39b6a0", roof: "#7fd6e8" }, // teal
  { body: "#a4d84a", roof: "#7fd6e8" }, // green
  { body: "#7c7fc9", roof: "#7fd6e8" }, // purple-blue
  { body: "#e8846b", roof: "#7fd6e8" }, // orange-red
  { body: "#2e1f5e", roof: "#7fd6e8" }, // dark navy
  { body: "#cdeffb", roof: "#7fd6e8" }, // pale blue
  { body: "#c07fd1", roof: "#7fd6e8" }, // pink-purple
  { body: "#f2a950", roof: "#7fd6e8" }, // amber
  { body: "#e0607a", roof: "#7fd6e8" }, // rose
  { body: "#5aa8e8", roof: "#c8ecfb" }, // sky blue
];

const road = document.getElementById("road");
const CAR_WIDTH = 90;

//picks random int, called upon for picking spots on track
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//picks random car color from carColor list
function pickColor() {
  return carColor[randomInt(0, carColor.length - 1)];
}
//randomly places cars on road
function createCar(lane) {
  const laneWidth = road.clientWidth;
  const left = randomInt(0, laneWidth - CAR_WIDTH); 

  const car = document.createElement("div");
  car.className = `car ${lane}`;
  car.style.left = left + "px";

  const { body, roof } = pickColor();
  car.style.setProperty("--car-color", body);
  car.style.setProperty("--roof-color", roof);

  const carBody = document.createElement("div");
  carBody.className = "car-body";

  const carRoof = document.createElement("div");
  carRoof.className = "car-roof";

  const wheelLeft = document.createElement("div");
  wheelLeft.className = "wheel left";

  const wheelRight = document.createElement("div");
  wheelRight.className = "wheel right";

  car.appendChild(carBody);
  car.appendChild(carRoof);
  car.appendChild(wheelLeft);
  car.appendChild(wheelRight);

  return car;
}
//makes the road
function buildRoad() {
  const topCount = randomInt(1, 4);
  const bottomCount = randomInt(1, 4);

  for (let i = 0; i < topCount; i++) {
    road.appendChild(createCar("top"));
  }
  for (let i = 0; i < bottomCount; i++) {
    road.appendChild(createCar("bottom"));
  }
}

buildRoad();