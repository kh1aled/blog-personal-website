//scroll to top 
let span = document.querySelector(".up");

window.onscroll = function () {
  // console.log(this.scrollY);
  // if (this.scrollY >= 1000) {
  //   span.classList.add("show");
  // } else {
  //   span.classList.remove("show");
  // }
  this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior:"smooth"
  });
};

let slider = document.querySelector(".slider");
let sliderContainer = document.querySelector(".slider-container");
let prevBtn = document.querySelector(".prevbtn");
let nextBtn  = document.querySelector(".nextbtn");
// عدد العناصر الي عاوزهم يظهرو 
let totalSliderVisible = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
// عدد االعناصر الي مش ظاهرين
let totalSlideableItems = sliderContainer.childElementCount - totalSliderVisible;
let currentSlidePos = 0;
const moveSlideItem = ()=>{
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
}
 const slideNext= ()=>{
    let slideEnd = currentSlidePos >=  totalSlideableItems;
    if(slideEnd){
      currentSlidePos = 0;
    }else{
        currentSlidePos++;
        console.log(currentSlidePos)
    }
    moveSlideItem();
}
nextBtn.addEventListener("click",slideNext )
const slidePrev= ()=>{
    if(currentSlidePos <= 0){
        currentSlidePos = totalSlideableItems;
    }else{
        currentSlidePos--;
    }
    moveSlideItem();
}
prevBtn.addEventListener("click",slidePrev);



