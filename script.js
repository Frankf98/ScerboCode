/*=================== icon navbar ==================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*====================== active link ====================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /*====================== remove icons and navbar ====================*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*===================== scroll reveal ========================*/
ScrollReveal({
  //reset: true,
  distance: "80px",
  duration: 2000 /** era = 2000 */,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".fprof, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "left" });

/*========================= typed js ====================*/
const typed = new Typed(".multiple-text", {
  strings: [
    "(SEO) consultant",
    "Front-End Developer",
    "Back-End Developer",
    "Full-stack web Developer.",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  backDelay: 100,
  loop: true,
});

/*========================= orologgio ====================*/
const { DateTime } = luxon;

function createClock(city, timeZone) {
  const clockContainer = document.getElementById("clock-container");

  // Crea il contenitore per l'orologio
  const clock = document.createElement("div");
  clock.className = "clock";

  // Crea le lancette delle ore e dei minuti
  const hourHand = document.createElement("div");
  hourHand.className = "hand hour-hand";

  const minuteHand = document.createElement("div");
  minuteHand.className = "hand minute-hand";

  // Crea la lancetta dei secondi
  const secondHand = document.createElement("div");
  secondHand.className = "hand second-hand";

  // Aggiungi la lancetta dei secondi all'orologio
  clock.appendChild(secondHand);

  // Aggiungi le lancette all'orologio
  clock.appendChild(hourHand);
  clock.appendChild(minuteHand);

  // Aggiungi l'orologio al container
  clockContainer.appendChild(clock);

  // Aggiorna l'orologio ogni secondo
  setInterval(() => {
    const now = DateTime.now().setZone(timeZone);

    const hourRotation = (now.hour % 12) * 30 + (now.minute / 60) * 30;
    const minuteRotation = (now.minute / 60) * 360;
    const secondRotation = (now.second / 60) * 360;
    secondHand.style.transform = `translate(-50%, -100%) rotate(${secondRotation}deg)`;

    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  }, 1000);
}

// Creazione degli orologi per le città
createClock("New York", "America/New_York");
createClock("London", "Europe/London");
createClock("Tokyo", "Asia/Tokyo");
createClock("Sydney", "Australia/Sydney");
createClock("Milano", "Europe/Rome");

/*========================= fullscreen====================*/

function openFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    /* Firefox */
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    /* IE/Edge */
    element.msRequestFullscreen();
  }
}
