// Toggle menu
const toggleBtn = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

toggleBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Typewriter effect (optional)
const titles = ["Developer", "Designer", "Creator"];
let count = 0;

function typeWriter() {
  const current = titles[count % titles.length];
  document.querySelector('.hero-subtitle').textContent = current;
  count++;
  setTimeout(typeWriter, 2000);
}

typeWriter();


// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate sections on scroll
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 }); // Trigger when 10% of section is visible

sections.forEach(section => {
    observer.observe(section);
});


// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(30, 30, 30, 0.9)';
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = '#1E1E1E';
        navbar.style.boxShadow = 'none';
    }
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-progress');

function animateSkillBars() {
  skillBars.forEach(bar => {
    const level = bar.getAttribute('data-level');
    bar.style.width = level + '%';
  });
}

const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateSkillBars();
      skillsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelector('.skills-section') && skillsObserver.observe(document.querySelector('.skills-section'));




// Project filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter projects
        const filter = button.getAttribute('data-filter');
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-tech').includes(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});


// Get the current year
  const currentYear = new Date().getFullYear();
  // Insert it into the span with id "year"
  document.getElementById('year').textContent = 'currentYear';




//speech recognition
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

function startListening(){
  recognition.start();
}

recognition.onresult = function(event){
  let command = event.results[0][0].transcript.toLowerCase();

  if(command.includes("who are you")){
    document.getElementById("response").innerText = "I am Tomlyne Tech, a web developer who builds modern websites.";
  }
  else if(command.includes("projects")){
    document.getElementById("response").innerText = "You can check my projects section below.";
  }
  else if(command.includes("contact")){
    document.getElementById("response").innerText = "You can contact me through WhatsApp or email.";
  }
};