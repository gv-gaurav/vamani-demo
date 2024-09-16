const slider = document.querySelector('.slider');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

let index = 0;
const itemWidth = document.querySelector('.product-item').offsetWidth + 20; // Width including margin

function updateSlider() {
    slider.style.transform = `translateX(-${index * itemWidth}px)`;
}

leftBtn.addEventListener('click', () => {
    index = Math.max(0, index - 1);
    updateSlider();
});

rightBtn.addEventListener('click', () => {
    const maxIndex = slider.children.length - Math.floor(slider.parentElement.offsetWidth / itemWidth);
    index = Math.min(maxIndex, index + 1);
    updateSlider();
});



// social media js code start


document.getElementById("mainButton").addEventListener("click", function() {
    var popup = document.getElementById("socialPopup");
    if (popup.style.display === "none" || popup.style.display === "") {
        popup.style.display = "flex";
    } else {
        popup.style.display = "none";
    }
});

// social media js code end





$(document).ready(function(){
    $(".testimonial .indicators li").click(function(){
      var i = $(this).index();
      var targetElement = $(".testimonial .tabs li");
      targetElement.eq(i).addClass('active');
      targetElement.not(targetElement[i]).removeClass('active');
              });
              $(".testimonial .tabs li").click(function(){
                  var targetElement = $(".testimonial .tabs li");
                  targetElement.addClass('active');
                  targetElement.not($(this)).removeClass('active');
              });
          });
  $(document).ready(function(){
      $(".slider .swiper-pagination span").each(function(i){
          $(this).text(i+1).prepend("0");
      });
  });





//   circle 8 images javascript code start






//   circle 8 images javascript code END













