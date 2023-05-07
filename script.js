// DarkMode
let toggle = document.getElementById('toggle');
let label_toggle = document.getElementById('label_toggle');
toggle.addEventListener('change',(event)=>{
    let checked = event.target.checked;
    document.body.classList.toggle('dark');
    if(checked){
        label_toggle.innerHTML = '<img src="./sun.png" alt="Imagen del modo oscuro">';
        label_toggle.style.width = '4rem';
        label_toggle.style.height = '4rem';
    } else{
        label_toggle.innerHTML = '<img src="./moon.png" alt="Imagen del modo oscuro">';
        label_toggle.style.width = '4rem';
        label_toggle.style.height = '4rem';
    }
});

//navbar icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset+ height){
            //activate navbar
            navLinks.forEach(links => {
                links.classList.remove('active');
                let targetLink = document.querySelector('header nav a[href*="' + id +'"]');
                if (targetLink) {
                    targetLink.classList.add('active');
                }
            });
        }
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    // Remove navbar when clicked
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Obtén el formulario
const form = document.querySelector('form');

// Agrega un evento 'submit' al formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

  // Inicializa EmailJS con tu clave pública
  emailjs.init('1wQ5hcO2lkSg1UWH6');

  // Obtén los valores de los campos del formulario
  const fullNameInput = document.querySelector('#full-name-input');
  const emailInput = document.querySelector('#email-input');
  const phoneNumberInput = document.querySelector('#phone-number-input');
  const subjectInput = document.querySelector('input[placeholder="Email Subject"]');
  const messageTextarea = document.querySelector('textarea[placeholder="Your message goes here"]');

  // Crea un objeto con los datos del formulario
  const formData = {
    name: fullNameInput.value,
    email: emailInput.value,
    phoneNumber: phoneNumberInput.value,
    subject: subjectInput.value,
    message: messageTextarea.value
  };

  // Envía el formulario a través de EmailJS
  emailjs.send("service_7ac3amo", "template_1ngo741", {from_name: 'Name: ' + formData.name + '\nEmail: ' + formData.email + '\nPhone Number: ' + formData.phoneNumber + '\nSubject: ' + formData.subject, message: '\nMessage:' + formData.message})
    .then(function(response) {
      Swal.fire(
        'Email sent!',
        'Your email was sent successfully!',
        'success'
      );
    }, function(error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong, email could not being sent!'
        });
    });
});