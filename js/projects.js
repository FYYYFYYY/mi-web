
document.addEventListener("headerLoaded", () => {
  const header = document.querySelector("header"); // busca el header insertado
  if (!header) return;

  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const current = window.scrollY;
    if (current > lastScroll) {
      header.style.top = "-70px"; // se esconde
    } else {
      header.style.top = "0";     // aparece
    }
    lastScroll = current;
  });
});


class ProjectItem extends HTMLElement {
    async connectedCallback() {
        const svgPath = this.getAttribute("icon");
        const file = this.getAttribute("file");
        const title = this.getAttribute("title");
        
        // cargar el svg
        let svgContent = "";
        if (svgPath) {
            try {
                const res = await fetch(svgPath);
                svgContent = await res.text();
            } catch {
                svgContent = "<!-- error cargando svg -->";
            }
        }

        this.innerHTML = `
            <a class="code-link" href="${file}" title="Explore related code" target="_blank">
                ${svgContent}
            </a>

            <a class="project" href="${file}" target="_blank">
                <h2>${title}</h2>
            </a>
        `;
    }
}

customElements.define("project-item", ProjectItem);