/* =====================================================
   LIBERTAD DE EXPRESIÓN
   script.js
===================================================== */

// =============================
// Barra de navegación al hacer scroll
// =============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "#1E293B";
        navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,0.25)";

    } else {

        navbar.style.background = "rgba(30,41,59,.78)";
        navbar.style.boxShadow = "none";

    }

});

// =============================
// Scroll suave para botones internos
// =============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// =============================
// Animación de aparición
// =============================

const elementos = document.querySelectorAll(".card, .stat");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

});

elementos.forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(40px)";
    el.style.transition="all .8s ease";

    observer.observe(el);

});

console.log("Libertad de Expresión cargada correctamente.");

// ===========================
// MENÚ HAMBURGUESA
// ===========================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if(menuToggle && navMenu){

    menuToggle.addEventListener("click",()=>{

        navMenu.classList.toggle("active");

        if(navMenu.classList.contains("active")){
            menuToggle.innerHTML="✕";
        }else{
            menuToggle.innerHTML="☰";
        }

    });

}
