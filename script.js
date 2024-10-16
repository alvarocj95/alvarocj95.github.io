const translations = {
    en: {
        header: "Welcome to My Website",
        saludo: "Hi!",
        soy: "I am",
        aboutMe: "About me",
    },
    es: {
        header: "Bienvenido a Mi Página Web",
        saludo: "¡Hola!",
        soy: "Soy",
        aboutMe: "Sobre mi",

       
    },
    cat: {
        header: "Benvingut a la Meva Página Web",
        saludo: "Hola!",
        soy: "Soc",
        aboutMe: "Sobre mi",
    }
};

const images = {
    en: {
        flagSpain: "assets/icons/espana.png",
        flagUK: "assets/icons/reino-unido.png"
    },
    es: {
        flagSpain: "assets/icons/espana.png",
        flagUK: "assets/icons/reino-unido.png"
    }
};


document.addEventListener("DOMContentLoaded", () => {
    const imgSpain = document.getElementById("imgSpain");
    const imgUK = document.getElementById("imgUK");

    // Función para actualizar el texto en la página
    function updateText(language) {
        document.getElementById("headerText").innerText = translations[language].header;
        document.getElementById("saludo").innerText = translations[language].saludo;
        document.getElementById("soy").innerText = translations[language].soy;
        
    }

    // Función para actualizar las imágenes en el encabezado
    function updateImages(language) {
        imgSpain.src = images[language].flagSpain;
        imgUK.src = images[language].flagUK;
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

    // Inicializar el texto en español (puedes cambiar el idioma por defecto aquí)
    updateText("es");
});

