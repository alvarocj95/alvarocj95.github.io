const translations = {
    en: {
        header: "Welcome to my Portfolio",
        saludo: "Hi!",
        soy: "I am",
        aboutMe: "About me",
        aboutMeTextOne: "I am a junior web developer with a solid foundation in modern web development technologies. Throughout my education and experience, I have worked with a variety of tools and languages that allow me to adapt to different projects and development environments.",
        aboutMeTextTwo: "Among my main skills are Angular, Express, Node.js, TypeScript, Symfony, JavaScript, PHP, and C#. These technologies have allowed me to build dynamic and efficient web applications, both in the front-end and back-end.",
        experience: "Experience",
        experienceTextOne: "My experience spans both front-end and back-end development, providing me with a comprehensive view of the web application lifecycle.",
        experienceTextTwo: "In the front-end, I have the skills to create attractive and functional user interfaces, using technologies like Angular and JavaScript.",
        experienceTextThree: "In the back-end, I have worked with Node.js, Express, PHP, and Symfony to design robust and efficient architectures, as well as implement APIs and manage databases."
    },
    es: {
        header: "Bienvenid@ a mi Porfolio",
        saludo: "¡Hola!",
        soy: "Soy",
        aboutMe: "Sobre mi",
        aboutMeTextOne: "Soy un desarrollador web junior con una sólida base en tecnologías modernas de desarrollo web. A lo largo de mi formación y experiencia, he trabajado con una variedad de herramientas y lenguajes que me permiten adaptarme adiferentes proyectos y entornos de desarrollo.",
        aboutMeTextTwo: "Entre mis principales habilidades destacan Angular, Express, Node.js, TypeScript, Symfony, JavaScript, PHP y C#. Estas tecnologías me han permitido construir aplicaciones web dinámicas y eficientes, tanto en el front-end como en el back-end.",
        experience: "Experiencia",
        experienceTextOne: "Mi experiencia abarca tanto el desarrollo front-end como el desarrollo back-end, lo que me proporciona una visión completa del ciclo de vida de las aplicaciones web.",
        experienceTextTwo: "En el front-end, tengo habilidades para crear interfaces de usuario atractivas y funcionales, utilizando tecnologías como Angular y JavaScript.",
        experienceTextThree: "En el back-end, he trabajado con Node.js, Express, PHP, y Symfony para diseñar arquitecturas robustas y eficientes, así como para implementar APIs y manejar bases de datos."
    },
    cat: {
        header: "Benvingut al meu Portfoli",
        saludo: "Hola!",
        soy: "Soc",
        aboutMe: "Sobre mi",
        aboutMeTextOne: "Soc un desenvolupador web júnior amb una sòlida base en tecnologies modernes de desenvolupament web. Al llarg de la meva formació i experiència, he treballat amb una varietat d'eines i llenguatges que em permeten adaptar-me a diferents projectes i entorns de desenvolupament.",
        aboutMeTextTwo: "Entre les meves principals habilitats destaquen Angular, Express, Node.js, TypeScript, Symfony, JavaScript, PHP i C#. Aquestes tecnologies m'han permès construir aplicacions web dinàmiques i eficients, tant en el front-end com en el back-end.",
        experience: "Experiència",
        experienceTextOne: "La meva experiència abasta tant el desenvolupament front-end com el desenvolupament back-end, cosa que em proporciona una visió completa del cicle de vida de les aplicacions web.",
        experienceTextTwo: "Al front-end, tinc habilitats per crear interfícies d'usuari atractives i funcionals, utilitzant tecnologies com Angular i JavaScript.",
        experienceTextThree: "Al back-end, he treballat amb Node.js, Express, PHP i Symfony per dissenyar arquitectures robustes i eficients, així com per implementar APIs i gestionar bases de dades."
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

    // Función para actualizar el texto en la página
    function updateText(language) {
        document.getElementById("headerText").innerText = translations[language].header;
        document.getElementById("saludo").innerText = translations[language].saludo;
        document.getElementById("soy").innerText = translations[language].soy;
        document.getElementById("aboutMe").innerText = translations[language].aboutMe;
        document.getElementById("aboutMeTextOne").innerText = translations[language].aboutMeTextOne;
        document.getElementById("aboutMeTextTwo").innerText = translations[language].aboutMeTextTwo;
        document.getElementById("experience").innerText = translations[language].experience;
        document.getElementById("experienceTextOne").innerText = translations[language].experienceTextOne;
        document.getElementById("experienceTextTwo").innerText = translations[language].experienceTextTwo;
        document.getElementById("experienceTextThree").innerText = translations[language].experienceTextThree;
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

    // Añadir event listeners a las imágenes de las banderas
    imgSpain.addEventListener("click", changeLanguage);
    imgUK.addEventListener("click", changeLanguage);
    imgCat.addEventListener("click", changeLanguage);

    // Inicializar el texto en español
    updateText("es");
});

