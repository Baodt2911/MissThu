function book() {
  document.querySelector("#reserve-table").style.display = "block";
}

window.addEventListener("load", function () {
  const sliderMain = document.querySelector(".slider-main");
  const sliderItems = document.querySelectorAll(".item-slide");
  const Prev = document.querySelector(".slider-prev");
  const Next = document.querySelector(".slider-next");
  const number = document.querySelector(".number");
  const sliderItemWidth = sliderItems[0].offsetWidth;
  const sliderLength = sliderItems.length;
  let positionX = 0;
  let Index = 0;
  Next.addEventListener("click", function () {
    changeSlide(1);
  });
  Prev.addEventListener("click", function () {
    changeSlide(-1);
  });

  function changeSlide(direction) {
    if (direction == 1) {
      if (Index >= sliderLength - 1) {
        Index = sliderLength - 1;
        return;
      }
      positionX = positionX - sliderItemWidth;
      sliderMain.style = `transform : translateX(${positionX}px)`;
      Index++;
    } else if (direction == -1) {
      if (Index <= 0) {
        Index = 0;
        return;
      }
      positionX = positionX + sliderItemWidth;
      sliderMain.style = `transform : translateX(${positionX}px)`;
      Index--;
    }
    console.log(positionX);
  }
});
