
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

   

