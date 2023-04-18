const navSlide = () => {
  const burger = document.querySelector('.profile-burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  let isNavVisible = false; // Variabel til at holde styr på menuens synlighed

  const toggleNav = () => {
    // Funktion til at vise/skjule menuen
    if (!isNavVisible) { // Opdateret betingelse til at tjekke, om menuen er synlig eller ej
      nav.classList.add('nav-active');
      burger.classList.add('toggle');
      navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
      });
    } else {
      nav.classList.remove('nav-active');
      burger.classList.remove('toggle');
      navLinks.forEach((link) => {
        link.style.animation = '';
      });
    }
    isNavVisible = !isNavVisible; // Skift værdien af variablen for at holde styr på menuens synlighed
  };

  burger.addEventListener('click', toggleNav); // Lyt efter klik på burger-ikonet
};

navSlide();


  
  const nav = document.querySelector('.nav-links');
  const burger = document.querySelector('.profile-burger');
  
  // Skjul menuen ved at ændre display egenskaben
  nav.style.display = 'none';
  
  // Event listener til burger-ikonet
  burger.addEventListener('click', () => {
    // Tjek om menuen er synlig
    if (nav.style.display === 'none') {
      // Vis menuen ved at ændre display egenskaben til 'block' (eller den oprindelige værdi for display)
      nav.style.display = 'block';
    } else {
      // Skjul menuen igen ved at ændre display egenskaben til 'none'
      nav.style.display = 'none';
    }
  });
  


//profile picture
//deklarerer HTML-elementer

const imgDiv = document.querySelector('.profile-img');

const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadbtn');

//hvis brugeren holder musen over profilbilledet

imgDiv.addEventListener('mouseenter', function()
{
    uploadBtn.style.display = "block";
});

//hvis vi fjerner musen fra profilbilledet

imgDiv.addEventListener('mouseleave', function()
{
    uploadBtn.style.display = "none";
});


//når vi vælger et foto at uploade

file.addEventListener('change', function
(file) {
    // Tjek om der er valgt en fil
    if (file.value) {
      // Simulerer en filupload ved at ændre tekstindholdet på knappen
      uploadBtn.innerHTML = `<i class="fas fa-check"></i> Fil uploadet`;
    } else {
      // Hvis ingen fil er valgt, nulstil tekstindholdet på knappen
      uploadBtn.innerHTML = `Upload foto`;
    }
});


