let menuVisible = false;

//función que oculta o muestra el menú
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }
    else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //ocultar el menu una vez que se seleccione alguna opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//función que aplica las animaciones de habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distanciaSkills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("nodejs");
        habilidades[3].classList.add("sql");
        habilidades[4].classList.add("vscode");

        habilidades[5].classList.add("communication");
        habilidades[6].classList.add("teamwork");
        habilidades[7].classList.add("creativity");
        habilidades[8].classList.add("dedication");
        habilidades[9].classList.add("projectManagment");
    }
}

//detecto el scroll para aplicar la animación de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}