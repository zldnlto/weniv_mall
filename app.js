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
 

  product.forEach((item) => {
    const box = document.createElement("div");
    const card = document.createElement("div");
    const imgBx = document.createElement("div");
    const img = document.createElement("img");
    //상품 설명


    const content = document.createElement("div");
    const details = document.createElement("div");
    const productName = document.createElement("h2");
    const data = document.createElement("div");
    const productPrice =document.createElement('h3')
    const discountRate =document.createElement('h3')
    const stocCount = document.createElement('h3')

    const actionBtn = document.createElement("div");

    details.classList.add("details");
    content.classList.add("content");
    box.classList.add("box");
    data.classList.add("data");
    card.classList.add("card");
    imgBx.classList.add("imgBx");
    actionBtn.classList.add("actionBtn");
    img.setAttribute(
      "src",
      `https://test.api.weniv.co.kr/${item.thumbnailImg}`
    );
    
    content.appendChild(details);
    details.append(productName, data, actionBtn);
    data.append(productPrice, discountRate, stocCount);
    imgBx.appendChild(img);
    card.append(imgBx, content);
    box.appendChild(card);
    itemArea.appendChild(box);
    
    productPrice.innerHTML=`${item.price}원<br><span>상품가격</span>`
    productName.textContent="상품이름";
    discountRate.innerHTML=`${item.discountRate}<br><span>할인율</span>`;
    stocCount.innerHTML=`${item.stockCount}개<br><span>재고</span>`
    productName.textContent=`${item.productName}`;
    actionBtn.innerHTML="<button>장바구니</button><button>상세보기</button>"
  });
});

// img.attr(`src: ${item.thumbnailImg}`);
