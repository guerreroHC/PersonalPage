document.addEventListener('DOMContentLoaded',function(){
    

const BotonInicio = document.getElementById('BotonInicio');
const Inicio = document.getElementById('inicio');

const BotonAbout = document.getElementById('BotonAbout');
const aboutMe = document.getElementById('aboutMe');

const BotonCursos = document.getElementById('BotonCursos');
const Cursos = document.getElementById('Cursos');

const BotonHabilidades = document.getElementById('BotonHabilidades');
const Habilidades = document.getElementById('Habilidades');

const BotonContacto = document.getElementById('BotonContacto');
const Contacto = document.getElementById('Contacto');

const btn_top = document.getElementById("btn_top")
btn_top.addEventListener('click', ()=>{
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
})

BotonInicio.addEventListener('click', function(event) {
    event.preventDefault();
    Inicio.scrollIntoView({behavior:'smooth'});
});

BotonAbout.addEventListener('click', function(event) {
    event.preventDefault();
    aboutMe.scrollIntoView({behavior:'smooth'});
});

BotonCursos.addEventListener('click', function(event) {
    event.preventDefault();
    Cursos.scrollIntoView({behavior:'smooth'});
});

BotonHabilidades.addEventListener('click', function(event) {
    event.preventDefault();
    Habilidades.scrollIntoView({behavior:'smooth'});
});

BotonContacto.addEventListener('click', function(event) {
    event.preventDefault();
    Contacto.scrollIntoView({behavior:'smooth'});
});

});