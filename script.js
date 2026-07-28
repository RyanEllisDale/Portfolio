// LIGHTBOX :
// Creating The Lightbox : 
const Lightbox = document.createElement('div')
Lightbox.id = 'Lightbox'
document.body.appendChild(Lightbox)

// Gets all specified Viable Images : 
const Images = document.querySelectorAll('.LightboxViable')

// Clicking on a viable Image :
Images.forEach(Image => {
  Image.addEventListener('click', e => {

    // Setting up Lightbox: 
    Lightbox.classList.add('Active')
    const LightboxImage = document.createElement('img')
    LightboxImage.src = Image.src

    // Removing Other Children :
    while (Lightbox.firstChild) {
      Lightbox.removeChild(Lightbox.firstChild)
    }

    // Adding this Image :
    Lightbox.appendChild(LightboxImage)
  })
})

// Clicking off the lightbox :
Lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  Lightbox.classList.remove('Active')
})

// CAROUSELS:
// Carousels :
document.querySelectorAll('.Carousel').forEach(InitCarousel);

function InitCarousel(Carousel) {
  // Data :   
  const CarouselImages = Carousel.querySelectorAll('.CarouselImage');
  const DotsContainer = Carousel.querySelector('.Dots');
  let Index = 0;

  // Create Dots :
  CarouselImages.forEach((_, i) => {

    // Create Dot :
    const Dot = document.createElement('div');
    Dot.classList.add('Dot');
    if (i === 0) Dot.classList.add('Active'); // First Dot is Active by Default

    // Dot Event Listener :
    Dot.onclick = () => {
      Index = i;
      ShowCarouselImage();
      ResetInterval();
    };

    DotsContainer.appendChild(Dot); 
  });

  // Store Created Dots :
  const Dots = DotsContainer.querySelectorAll('.Dot');

  // Slide Control : 
  function ShowCarouselImage() {
    // Remove Active from Images and Dots :
    CarouselImages.forEach(ci => ci.classList.remove('Active'));
    Dots.forEach(d => d.classList.remove('Active'));

    // Add Active to Index'd Image and Dot : 
    CarouselImages[Index].classList.add('Active');
    Dots[Index].classList.add('Active');
  }

  function nextSlide() {
        // Incriment Index or loop back to 0 if past length
        Index = (Index + 1) % CarouselImages.length;
        ShowCarouselImage();
    }

    // Autoplay Interval :
    let Interval = setInterval(nextSlide, 4000);
    function ResetInterval() {
        clearInterval(Interval);
        Interval = setInterval(nextSlide, 4000);
    }

    // Pause on Hover : 
    Carousel.addEventListener('mouseenter', () => {
        clearInterval(Interval);
    });

    // Restart on Leave :
    Carousel.addEventListener('mouseleave', () => {
        ResetInterval();
    });
}

