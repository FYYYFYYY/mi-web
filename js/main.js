
// Cargar quotes desde quotes.json
fetch("assets/data/quotes.json")
    .then(res => res.json())
    .then(data => {
        const random = data[Math.floor(Math.random() * data.length)];
        
        const autorHTML = random.link
            ? `<a id="author-link" href="${random.link}" target="_blank" rel="noopener noreferrer">${random.autor}</a>`
            : `${random.autor}`;

        document.getElementById("quote").innerHTML = 
            `"${random.texto}"<br><span id="author">— ${autorHTML}</span>`;
    });


// Añadir animaciones bien a los items en main
const boxes = document.querySelectorAll(".item"); // selecciona todos los elementos con clase "item"

boxes.forEach(box => {
  let hoverTimeout;

  box.addEventListener("mouseenter", () => {
    hoverTimeout = setTimeout(() => {
      box.classList.add("hovered");
    }, 60);
  });

  box.addEventListener("mouseleave", () => {
    clearTimeout(hoverTimeout);
    box.classList.remove("hovered");
  });
});
