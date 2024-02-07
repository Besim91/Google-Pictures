let imgAlbania = [
  `./img/albania (1).jpg`,
  `./img/albania (2).jpg`,
  `./img/albania (3).jpg`,
  `./img/albania (4).jpg`,
  `./img/albania (5).jpg`,
  `./img/albania (6).jpg`,
  `./img/albania (7).jpg`,
  `./img/albania (8).jpg`,
  `./img/albania (9).jpg`,
];

let imgEgypt = [
  `./img/hieroglyph-7883891_640.jpg`,
  `./img/stars-1096934_640.jpg`,
  `./img/egypt (1).jpg`,
  `./img/egypt (2).jpg`,
  `./img/egypt (3).jpg`,
  `./img/egypt (4).jpg`,
  `./img/egypt (5).jpg`,
];

let imgJapan = [
  `./img/alley-5931413_640.jpg`,
  `./img/kimono-1822520_640.jpg`,
  `./img/kyoto-1976538_640.jpg`,
  `./img/japan 1 (1).jpg`,
  `./img/japan 1 (2).jpg`,
  `./img/japan 1 (3).jpg`,
  `./img/japan 1 (4).jpg`,
];

let favoritArray = [];

load();
save();

function render(country) {
  if (country == "albania") {
    renderImg(country, imgAlbania);
  }
  if (country == "egypt") {
    renderImg(country, imgEgypt);
  }
  if (country == "japan") {
    renderImg(country, imgJapan);
  }
}

function renderImg(country, array) {
  let renderContainer = document.getElementById(`render`);

  for (i = 0; i < array.length; i++) {
    renderContainer.innerHTML += `
  <div id="imgContainer">
      <a href="#" onclick="showImg(${i}, '${country}')"><img src="${array[i]}" alt="${array[i]}"></a>
      <a href="#" onclick="addToFavorit(${i}, '${country}')"><img id="${i}" class="heartOptionColor heartOption" src="./img/herz.png" alt=""/></a>
  </div>
  `;
  }
}

function showImg(i, country) {
  if (country == "albania") {
    showImgFunction(i, imgAlbania, country);
  }

  if (country == `japan`) {
    showImgFunction(i, imgJapan, country);
  }

  if (country == `egypt`) {
    showImgFunction(i, imgEgypt, country);
  }
}

function showImgFunction(i, array, country) {
  let showImgContainer = document.getElementById(`showImg`);
  showImgContainer.innerHTML = ``;

  showImgContainer.classList.remove(`d-none`);

  showImgContainer.innerHTML = `<div id="showImgDesigne">
  <a href="#" id="turnLeft" onclick="slideImg('left', ${i}, '${country}')">◀</a>
  <a href="#" id="turnRight" onclick="slideImg('right', ${i}, '${country}')">▶</a>

  <a href="#"><img id="imgBig" src="${array[i]}" alt="${array[i]}" /></a>
  <a href="${array[i]}" download><img src="./img/downloads.png" alt="#" class="download"/></a>
  <a href="#" onclick="closeImg()"><img src="./img/zuruck-pfeil.png" alt="#" class="backArrow"/></a>
</div>`;
}

function closeImg() {
  document.getElementById(`showImg`).classList.add(`d-none`);
}

function slideImg(leftOrRight, i, country) {
  if (country == "albania") {
    slideImgFunktion(leftOrRight, i, country, imgAlbania);
  }
  if (country == "japan") {
    slideImgFunktion(leftOrRight, i, country, imgJapan);
  }
  if (country == "egypt") {
    slideImgFunktion(leftOrRight, i, country, imgEgypt);
  }
}

function slideImgFunktion(leftOrRight, i, country, array) {
  if (leftOrRight == "left") {
    if (i >= 1) {
      let iNew = i - 1;
      showImgFunction(iNew, array, country);
    } else {
      i = array.length - 1;
      showImgFunction(i, array, country);
    }
  } else {
    if (i == array.length - 1) {
      i = 0;
      showImgFunction(i, array, country);
    } else {
      let iNew = i + 1;
      showImgFunction(iNew, array, country);
    }
  }
}

function addToFavorit(i, country) {
  document.getElementById(`${i}`).classList.toggle("heartOptionColor");

  if (country == "albania") {
    favoritArray.push(imgAlbania[i]);
  }
  if (country == "egypt") {
    favoritArray.push(imgEgypt[i]);
  }
  if (country == "japan") {
    favoritArray.push(imgJapan[i]);
  }

  save();
}

function save() {
  let albaniaSave = JSON.stringify(favoritArray);
  let japanSave = JSON.stringify(favoritArray);
  let egyptSave = JSON.stringify(favoritArray);

  localStorage.setItem(`favoritArray`, albaniaSave);
  localStorage.setItem(`favoritArray`, japanSave);
  localStorage.setItem(`favoritArray`, egyptSave);
}

function load() {
  let albaniaSave = localStorage.getItem(`favoritArray`);
  let japanSave = localStorage.getItem(`favoritArray`);
  let egyptSave = localStorage.getItem(`favoritArray`);

  if (albaniaSave && japanSave && egyptSave) {
    favoritArray = JSON.parse(albaniaSave);
    favoritArray = JSON.parse(japanSave);
    favoritArray = JSON.parse(egyptSave);
  }
}

function renderImgFavorit() {
  let renderFavoritContainer = document.getElementById(`renderFavorit`);
  renderFavoritContainer.innerHTML = ``;

  for (i = 0; i < favoritArray.length; i++) {
    renderFavoritContainer.innerHTML += `
    <div id="imgContainer">
        <a href="#" onclick="showImgFavorit(${i})"><img src="${favoritArray[i]}" alt="${favoritArray[i]}"></a>
        <img class="heartFavorit" src="./img/herz.png" alt="herz">
    </div>
    `;
  }
}

function showImgFavorit(i) {
  let showImgContainer = document.getElementById(`showImg`);
  showImgContainer.innerHTML = ``;

  showImgContainer.classList.remove(`d-none`);
  showImgContainer.innerHTML = `<div id="showImgDesigne">
  <a href="#" id="turnLeft" onclick="slideImgFavorit('left', ${i})">◀</a>
  <a href="#" id="turnRight" onclick="slideImgFavorit('right', ${i})">▶</a>

  <a href="#"><img id="imgBig" src="${favoritArray[i]}" alt="${favoritArray[i]}" /></a>
  <a href="${favoritArray[i]}" download><img src="./img/downloads.png" alt="" class="download"/></a>
  <a href="#" onclick="closeImg()"><img src="./img/zuruck-pfeil.png" alt="" class="backArrow"/></a>
  <a href="#" onclick="removeFavorit(${i})"><img id="heart" src="./img/gebrochenes-herz.png" alt=""/></a>
  </div>`;
}
function slideImgFavorit(leftOrRight, i) {
  if (leftOrRight == "left") {
    if (i >= 1) {
      i = i - 1;
      showImgFavorit(i);
    } else {
      i = favoritArray.length - 1;
      showImgFavorit(i);
    }
  } else {
    if (i == favoritArray.length - 1) {
      i = 0;
      showImgFavorit(i);
    } else {
      i = i + 1;
      showImgFavorit(i);
    }
  }
}

function removeFavorit(i) {
  favoritArray.splice(i, 1);
  closeImg();
  save();
  renderImgFavorit();
}
