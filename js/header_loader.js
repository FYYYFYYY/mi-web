
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("header");

  fetch("header.html")
    .then(res => {
      if (!res.ok) throw new Error("No se pudo cargar el header");
      return res.text();
    })
    .then(data => {
        container.innerHTML = data;

        // Disparar evento custom para avisar que el header ya está cargado
        document.dispatchEvent(new Event("headerLoaded"));

        // Aquí puedes inicializar eventos del header
        const buttons = document.querySelectorAll(".button-header");
        const menus = document.querySelectorAll(".menu")

        buttons.forEach(button => {
            // Obtener el menú asociado usando el data-menu
            const menuId = button.getAttribute("data-menu");
            const menu = document.getElementById(menuId);

            // Toggle del menú al hacer clic
            button.addEventListener("click", (e) => {
                e.stopPropagation();

                menus.forEach(m => {
                    if (m !== menu) m.classList.remove("show");
                });

                menu.classList.toggle("show");
            });

            // Cerrar el menú si se hace clic fuera
            document.addEventListener("click", (e) => {
                if (!menu.contains(e.target) && !button.contains(e.target)) {
                    menu.classList.remove("show");
                }
            });
        });

    })
    .catch(err => console.error(err));
});



