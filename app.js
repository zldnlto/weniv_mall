// https://test.api.weniv.co.kr/mall
const itemArea = document.querySelector(".items-area");

async function getProductData() {
  try {
    const response = await fetch("https://test.api.weniv.co.kr/mall");
    const product = response.json();
    return product;
  } catch (error) {
    console.log(error);
  }
}

getProductData().then((product) => {
  // console.log(product);
  const dummy = document.createElement("div");
  const box = document.createElement("div");
  const card = document.createElement("div");
  const imgBx = document.createElement("div");
  const img = document.createElement("img");

  dummy.classList.add("dummy");
  box.classList.add("box");
  card.classList.add("card");
  imgBx.classList.add("imgBx");

  product.forEach((item) => {
    img.setAttribute('src', `${item.thumbnailImg}`);

  });


  imgBx.appendChild(img);
  card.appendChild(imgBx);
  box.appendChild(card);
  dummy.appendChild(box);
  itemArea.appendChild(dummy);
});

// img.attr(`src: ${item.thumbnailImg}`);