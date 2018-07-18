let currentSlide = 0,
    slides = document.querySelectorAll('.slide'),
    playing = true,
    timer = document.querySelector('.button__timer'),
    arrowLeft = document.querySelector('.arrow'), 
    arrowRight = document.querySelector('.arrow__right'),
    dots = document.querySelectorAll(".dot");

  // Pause timer
  function pauseTimer() {
    timer.innerHTML = 'Play';
    playing = false;
    clearInterval(startTimer);
}

  // Play timer
  function playTimer() {
	timer.innerHTML = 'Pause';
	playing = true;
    startTimer = setInterval(slideRight, 3000);
}

timer.addEventListener("click", function(){
	if (playing) { 
        pauseTimer(); 
    } else {
        playTimer();
    }
});
  
  // Init reset
  function reset() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove ("slide--active");
      dots[i].classList.remove ("dot--active");
    }
  }
  
  // Init slider
  function startSlide() {
    reset();
    slides[0].classList.add ("slide--active");
    dots[0].classList.add ("dot--active");
  }
  
  // Show prev
  function slideLeft() {
    if (currentSlide === 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide--;
    }
    reset();
    slides[currentSlide].classList.add ("slide--active");
    dots[currentSlide].classList.add ("dot--active");
}
  
  // Show next
  function slideRight() {
    if (currentSlide === slides.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    reset();
    slides[currentSlide].classList.add ("slide--active");
    dots[currentSlide].classList.add ("dot--active");
}
  
  // Left arrow click
  arrowLeft.addEventListener("click", slideLeft);
  
  // Right arrow click
  arrowRight.addEventListener("click", slideRight);

   // Dot click
  function dotnav(index) {
    reset();
    slides[index].classList.add("slide--active");
    dots[index].classList.add("dot--active");
}
  for (let i = 0; i < slides.length; i++) {
    dots[i].addEventListener("click", function() {
        dotnav(i)
    } );
}

  // Arrow keys keydown
  document.addEventListener('keydown', function(keys) {
    if(keys.code == 'ArrowRight') {
        slideRight();        
    }
    else if(keys.code == 'ArrowLeft') {
        slideLeft();
    }
});

startSlide();
playTimer();