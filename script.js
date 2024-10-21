const translations = {
    en: {
        aboutMe: "About me",
        aboutMeTextOne: "I am a junior web developer with a solid foundation in modern web development technologies. Throughout my education and experience, I have worked with a variety of tools and languages that allow me to adapt to different projects and development environments.",
        aboutMeTextTwo: "Among my main skills are <strong>Angular</strong>, <strong>Express</strong>, <strong>Node.js</strong>, <strong>TypeScript</strong>, <strong>Symfony</strong>, <strong>JavaScript</strong>, <strong>PHP</strong>, and <strong>C#</strong>. These technologies have allowed me to build dynamic and efficient web applications, both in the front-end and back-end.",
        experience: "Experience",
        experienceTextOne: "My experience spans both front-end and back-end development, providing me with a comprehensive view of the web application lifecycle.",
        experienceTextTwo: "In the front-end, I have the skills to create attractive and functional user interfaces, using technologies like <strong>Angular</strong> and <strong>JavaScript</strong>.",
        experienceTextThree: "In the back-end, I have worked with <strong>Node.js</strong>, <strong>Python</strong>, <strong>Java</strong>, <strong>PHP</strong>, and <strong>Symfony</strong> to design robust and efficient architectures, as well as implement APIs and manage databases.",
        experienceTextFour: "In the area of databases, I have experience working with database management systems such as <strong>SQL</strong>, <strong>MongoDB</strong>, and <strong>Oracle</strong>."
    },
    es: {
        aboutMe: "Sobre mí",
        aboutMeTextOne: "Soy un desarrollador web junior con una sólida base en tecnologías modernas de desarrollo web. A lo largo de mi formación y experiencia, he trabajado con una variedad de herramientas y lenguajes que me permiten adaptarme a diferentes proyectos y entornos de desarrollo.",
        aboutMeTextTwo: "Entre mis principales habilidades destacan <strong>Angular</strong>, <strong>Express</strong>, <strong>Node.js</strong>, <strong>TypeScript</strong>, <strong>Symfony</strong>, <strong>JavaScript</strong>, <strong>PHP</strong> y <strong>C#</strong>. Estas tecnologías me han permitido construir aplicaciones web dinámicas y eficientes, tanto en el front-end como en el back-end.",
        experience: "Experiencia",
        experienceTextOne: "Mi experiencia abarca tanto el desarrollo front-end como el desarrollo back-end, lo que me proporciona una visión completa del ciclo de vida de las aplicaciones web.",
        experienceTextTwo: "En el front-end, tengo habilidades para crear interfaces de usuario atractivas y funcionales, utilizando tecnologías como <strong>Angular</strong> y <strong>JavaScript</strong>.",
        experienceTextThree: "En el back-end, he trabajado con <strong>Node.js</strong>, <strong>Python</strong>, <strong>Java</strong>, <strong>PHP</strong>, y <strong>Symfony</strong> para diseñar arquitecturas robustas y eficientes, así como para implementar APIs y manejar bases de datos.",
        experienceTextFour: "En el área de bases de datos, tengo experiencia trabajando con sistemas de gestión de bases de datos como <strong>SQL</strong>, <strong>MongoDB</strong> y <strong>Oracle</strong>."
    },
    cat: {
        aboutMe: "Sobre mi",
        aboutMeTextOne: "Soc un desenvolupador web júnior amb una sòlida base en tecnologies modernes de desenvolupament web. Al llarg de la meva formació i experiència, he treballat amb una varietat d'eines i llenguatges que em permeten adaptar-me a diferents projectes i entorns de desenvolupament.",
        aboutMeTextTwo: "Entre les meves principals habilitats destaquen <strong>Angular</strong>, <strong>Express</strong>, <strong>Node.js</strong>, <strong>TypeScript</strong>, <strong>Symfony</strong>, <strong>JavaScript</strong>, <strong>PHP</strong> i <strong>C#</strong>. Aquestes tecnologies m'han permès construir aplicacions web dinàmiques i eficients, tant en el front-end com en el back-end.",
        experience: "Experiència",
        experienceTextOne: "La meva experiència abasta tant el desenvolupament front-end com el desenvolupament back-end, cosa que em proporciona una visió completa del cicle de vida de les aplicacions web.",
        experienceTextTwo: "Al front-end, tinc habilitats per crear interfícies d'usuari atractives i funcionals, utilitzant tecnologies com <strong>Angular</strong> i <strong>JavaScript</strong>.",
        experienceTextThree: "Al back-end, he treballat amb <strong>Node.js</strong>, <strong>Python</strong>, <strong>Java</strong>, <strong>PHP</strong> i <strong>Symfony</strong> per dissenyar arquitectures robustes i eficients, així com per implementar APIs i gestionar bases de dades.",
        experienceTextFour: "En l'àrea de bases de dades, tinc experiència treballant amb sistemes de gestió de bases de dades com <strong>SQL</strong>, <strong>MongoDB</strong> i <strong>Oracle</strong>."
    }
};

const images = {
    en: {
        flagSpain: "assets/icons/espana.png",
        flagUK: "assets/icons/reino-unido.png",
        flagCat: "assets/icons/catalonia.png"
    },
    es: {
        flagSpain: "assets/icons/espana.png",
        flagUK: "assets/icons/reino-unido.png",
        flagCat: "assets/icons/catalonia.png"
    },
    cat: {
        flagSpain: "assets/icons/espana.png",
        flagUK: "assets/icons/reino-unido.png",
        flagCat: "assets/icons/catalonia.png"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const imgSpain = document.getElementById("imgSpain");
    const imgUK = document.getElementById("imgUK");
    const imgCat = document.getElementById("imgCat");
    const moonIcon = document.getElementById("moon");
    
    // Función para actualizar el texto en la página
    function updateText(language) {
        document.getElementById("soy").innerText = translations[language].soy;
        document.getElementById("aboutMe").innerText = translations[language].aboutMe;
        document.getElementById("aboutMeTextOne").innerText = translations[language].aboutMeTextOne;
        
        // Usar innerHTML para los textos que contienen etiquetas HTML
        document.getElementById("aboutMeTextTwo").innerHTML = translations[language].aboutMeTextTwo;
        document.getElementById("experience").innerText = translations[language].experience;
        document.getElementById("experienceTextOne").innerText = translations[language].experienceTextOne;
        document.getElementById("experienceTextTwo").innerHTML = translations[language].experienceTextTwo; 
        document.getElementById("experienceTextThree").innerHTML = translations[language].experienceTextThree;
        document.getElementById("experienceTextFour").innerHTML = translations[language].experienceTextFour; 
    }

    // Función para actualizar las imágenes en el encabezado
    function updateImages(language) {
        imgSpain.src = images[language].flagSpain;
        imgUK.src = images[language].flagUK;
        imgCat.src = images[language].flagCat;
    }

    // Función para cambiar el idioma
    function changeLanguage(event) {
        const selectedLanguage = event.target.getAttribute('data-lang');
        updateText(selectedLanguage);
        updateImages(selectedLanguage);
    }

    moonIcon.addEventListener('click', function() {
        const body = document.body;

        // Alternar entre los modos
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');

        // Cambiar el icono
        if (body.classList.contains('dark-mode')) {
            this.src = 'assets/icons/sun.png'; 
            this.alt = 'Modo Claro'; 
        } else {
            this.src = 'assets/icons/moon.png'; 
            this.alt = 'Modo Oscuro'; 
        }
    });
    
    // Añadir event listeners a las imágenes de las banderas
    imgSpain.addEventListener("click", changeLanguage);
    imgUK.addEventListener("click", changeLanguage);
    imgCat.addEventListener("click", changeLanguage);

    // Inicializar el texto en español
    updateText("es");
});
