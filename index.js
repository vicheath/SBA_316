
document.body.style.backgroundColor = '#765898'

var menuList = [
    { text: "EVA 01", url: "https://github.com/vicheath", color: "#52d053" },
    { text: "EVA 02", url: "http://127.0.0.1:5500/SBA/Gaming%20Page/index.html", color: "#c20f0f" },
    { text: "EVA 03", url: "http://127.0.0.1:5500/SBA/Blogpost/index.html", color: "#a2b2df" },
    { text: "NERV", url: "#", color: "#e6770b", disabled: true }
   ];
   
   var navList = document.createElement("ul");
   navList.setAttribute("class", "nav justify-content-center");
   
   menuList.forEach(function (item) {
    var listItem = document.createElement("li");
    listItem.setAttribute("class", "nav-item");
   
    var anchor = document.createElement("a");
    anchor.setAttribute("class", "nav-link");
    anchor.setAttribute("href", item.url);
    anchor.setAttribute("target", "_blank");
    anchor.setAttribute("style", "color: " + item.color + ";");
    anchor.textContent = item.text;
   
    if (item.disabled) {
       anchor.setAttribute("aria-disabled", "true");
       anchor.setAttribute("class", "nav-link disabled");
    } else {
       anchor.setAttribute("aria-current", "page");
       anchor.setAttribute("class", "nav-link active");
    }
   
    listItem.appendChild(anchor);
    navList.appendChild(listItem);
   });

   var menuButtonsContainer = document.getElementById("menu_buttons_container");

   document.body.appendChild(navList);

   document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('myForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var formElements = document.forms['myForm'].elements;
        var firstName = formElements['fname'].value;
        var lastName = formElements['lname'].value;
        var email = formElements['email'].value;
        var age = formElements['age'].value;

        if (age < 16) {
            alert('You must be at least 16 years old to use this application.');
            return;
        }

        var output = 'Welcome, ' + firstName + ' ' + lastName + '!';
        output += '<br>Email: ' + email;
        output += '<br>Age: ' + age;
        document.querySelector('.text_area').innerHTML = output;
    });
});

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;
    var userInfo = 'First Name: ' + firstName + ', Last Name: ' + lastName + ', Email: ' + email + ', Age: ' + age;
    document.querySelector('.user_info').innerHTML = userInfo;
});
