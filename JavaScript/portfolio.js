// JavaScript for dynamic role display
    let roles = [
      "Web Developer",
      "Full Stack Java Developer",
      "Software Engineer"
    ];

    let index = 0;
    setInterval(() => {
      index = (index + 1) % roles.length;

      document.getElementById("role-text").textContent = roles[index];
    }, 2000);


     let slide = [
        document.getElementById('msg1'),
        document.getElementById('msg2'),
        document.getElementById('msg3'),
       ];

         let currentSlide = 0;

            setInterval(() => {
            slide[currentSlide].style.display = 'none';
            currentSlide = (currentSlide + 1) % slide.length;
            slide[currentSlide].style.display = 'block';
            }, 2000);
/*

let slides = [
    document.getElementById('msg1'),
    document.getElementById('msg2'),
    document.getElementById('msg3')
];

let currentSlide = 0;

// Hide all except first
slides.forEach(s => s.style.display = "none");
slides[0].classList.add("fade-in");

setInterval(() => {
    slides[currentSlide].style.display = "none";
    slides[currentSlide].classList.remove("fade-in");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].style.display = "block";
    slides[currentSlide].classList.add("fade-in");

}, 3000);

*/
