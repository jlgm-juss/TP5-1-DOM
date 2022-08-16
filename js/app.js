class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, añoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoNacimiento = añoNacimiento;
  }
  mostrarGeneracion() {
    if (this.añoNacimiento >= 1930 && this.añoNacimiento <= 1948) {
      alert(`
        Generacion: Silent Generation
        Rasgo caracteristico: Austeridad`);
    } else if (this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968) {
      alert(`
        Generacion: Baby Boom
        Rasgo caracteristico: Ambicion`);
    } else if (this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980) {
      alert(`
        Generacion X
        Rasgo caracteristico: Obsesion por el exito"`);
    } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993) {
      alert(`
        Generacion Y
        Rasgo caracteristico: Frustacion`);
    } else if (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010) {
      alert(`
        Generacion Z
        Rasgo caracteristico: Irreverencia`);
    } else {
      alert("Generacion no declarada");
    }
  }
  esMayorDeEdad() {
    if (this.edad >= 18) {
      alert(`${this.nombre} es mayor de edad`);
    } else {
      alert(`${this.nombre} no es mayor de edad`);
    }
  }
  mostrarDatos() {
    alert(`
      Nombre: ${this.nombre}
      Edad: ${this.edad}
      DNI: ${this.dni}
      Sexo: ${this.sexo}
      Peso: ${this.peso} kg
      Altura: ${this.altura} mts
      Año de Nacimiento: ${this.añoNacimiento}`);
  }
}
let formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", enviar);

function enviar(e) {
  e.preventDefault();
  let idNombre = document.querySelector("#nombre").value;
  let sectionBotones = document.querySelector("#sectionBotones");
  let parrafNombre = document.createElement("h2");
  parrafNombre.innerHTML = `Persona ingresada: ${idNombre}`;
  parrafNombre.className = "my-4 text-white text-center";
  sectionBotones.appendChild(parrafNombre);
  let botones = `
<article class="row my-2">
  <div class="">
    <button type="button" class="btn btn-warning container d-grid col-6 mb-1" onclick="mostrarInfo()">Informacion Personal</button>
  </div>
  <div class="">
    <button type="button" class="btn btn-success container d-grid col-6 mb-1" onclick="mostrarGeneracion()">Generacion</button>
  </div>
  <div class="">
    <button type="button" class="btn btn-danger container d-grid col-6 mb-1" onclick="mostrarEdad()">¿Mayor de edad?</button>
  </div>
</article>`;
  sectionBotones.innerHTML += botones;
}

function mostrarInfo() {
  let idNombre = document.querySelector("#nombre").value;
  let idEdad = document.querySelector("#edad").value;
  let idDNI = document.querySelector("#DNI").value;
  let idSexo = document.querySelector("#sexo").value;
  let idPeso = document.querySelector("#peso").value;
  let idAltura = document.querySelector("#altura").value;
  let idAñoDeNacimiento = document.querySelector("#añoDeNacimiento").value;
  let personaX = new Persona(
    idNombre,
    idEdad,
    idDNI,
    idSexo,
    idPeso,
    idAltura,
    idAñoDeNacimiento
  );
  personaX.mostrarDatos();
}
function mostrarGeneracion() {
  let idNombre = document.querySelector("#nombre").value;
  let idEdad = document.querySelector("#edad").value;
  let idDNI = document.querySelector("#DNI").value;
  let idSexo = document.querySelector("#sexo").value;
  let idPeso = document.querySelector("#peso").value;
  let idAltura = document.querySelector("#altura").value;
  let idAñoDeNacimiento = document.querySelector("#añoDeNacimiento").value;
  let personaX = new Persona(
    idNombre,
    idEdad,
    idDNI,
    idSexo,
    idPeso,
    idAltura,
    idAñoDeNacimiento
  );
  personaX.mostrarGeneracion();
}
function mostrarEdad() {
  let idNombre = document.querySelector("#nombre").value;
  let idEdad = document.querySelector("#edad").value;
  let idDNI = document.querySelector("#DNI").value;
  let idSexo = document.querySelector("#sexo").value;
  let idPeso = document.querySelector("#peso").value;
  let idAltura = document.querySelector("#altura").value;
  let idAñoDeNacimiento = document.querySelector("#añoDeNacimiento").value;
  let personaX = new Persona(
    idNombre,
    idEdad,
    idDNI,
    idSexo,
    idPeso,
    idAltura,
    idAñoDeNacimiento
  );
  personaX.esMayorDeEdad();
}
