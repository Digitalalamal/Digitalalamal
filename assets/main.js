let oneDraw = document.getElementById("oneDraw");
let manyDraw = document.getElementById("manyDraw");
let frameYes = document.getElementById("frameYes");
let frameNo = document.getElementById("frameNo");
let height = document.getElementById("height");
let width = document.getElementById("width");
let result = document.getElementById("price");
// Img Data
let imgQuantity = document.getElementById("imgQuantity");
let imgFrame = document.getElementById("imgFrame");
let imgPrice = document.getElementById("imgPrice");

calculate = () => {
  if (height.value != "" && width.value != "") {
    if (oneDraw.checked) {
      imgQuantity.innerHTML = "لوحة واحدة";
      if (frameYes.checked) {
        imgFrame.innerHTML = "بأطار";
        let price =
          (parseInt(height.value) / 100) * (parseInt(width.value) / 100) * 450;
        result.innerHTML = Math.round(price);
        imgPrice.innerHTML = Math.round(price);
      } else if (frameNo.checked) {
        imgFrame.innerHTML = "بدون أطار";
        let price =
          (parseInt(height.value) / 100) * (parseInt(width.value) / 100) * 350;
        result.innerHTML = Math.round(price);
        imgPrice.innerHTML = Math.round(price);
      }
    } else if (manyDraw.checked) {
      imgQuantity.innerHTML = "12 لوحة فأكثر";
      if (frameYes.checked) {
        imgFrame.innerHTML = "بأطار";
        let price =
          (parseInt(height.value) / 100) * (parseInt(width.value) / 100) * 300;
        result.innerHTML = Math.round(price);
        imgPrice.innerHTML = Math.round(price);
      
    } else if (frameNo.checked) {
      imgFrame.innerHTML = "بدون أطار";
      let price =
        (parseInt(height.value) / 100) * (parseInt(width.value) / 100) * 300;
      result.innerHTML = Math.round(price);
      imgPrice.innerHTML = Math.round(price);
    }}
  } else {
    alert("يجب إدخال أبعاد اللوحة");
  }
};
