//const note = document.querySelector('#modalNuevaNota');
const boton = document.querySelector('#botonTest');

// Simulación de datos de notas desde una API
const notas = [
    {
        id: 1,
        titulo: "Nota 1",
        contenido: "Contenido largo de la primera nota que se truncará con tres puntos suspensivos al final. Contenido largo de la primera nota que se truncará con tres puntos suspensivos al final. Contenido largo de la primera nota que se truncará con tres puntos suspensivos al final."
    },
    {
        id: 2,
        titulo: "Nota 2",
        contenido: "Contenido largo de la segunda nota que se truncará con tres puntos suspensivos al final. Contenido largo de la segunda nota que se truncará con tres puntos suspensivos al final. Contenido largo de la segunda nota que se truncará con tres puntos suspensivos al final."
    },
    {
        id: 3,
        titulo: "Nota 3",
        contenido: "Contenido largo de la tercera nota que se truncará con tres puntos suspensivos al final. Contenido largo de la tercera nota que se truncará con tres puntos suspensivos al final. Contenido largo de la tercera nota que se truncará con tres puntos suspensivos al final."
    },
    {
        id: 4,
        titulo: "Nota 4",
        contenido: "Contenido largo de la cuarta nota que se truncará con tres puntos suspensivos al final."
    }
];

// Función para crear y mostrar tarjetas de notas
function mostrarNotas() {
    const notaContainer = document.getElementById("notaContainer");

    notas.forEach(nota => {
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-md-3");

        const cardHTML = `
        <div class="card mb-4">
        <div class="card-body overflow-hidden">
            <h5 class="card-title">${nota.titulo}</h5>
            <p class="card-text">${nota.contenido}</p>
        </div>
        <div class="card-footer text-right border-0">
            <button class="btn btn-primary mr-2" onclick="editarNota(${nota.id})">Editar</button>
            <button class="btn btn-danger" onclick="eliminarNota(${nota.id})">Eliminar</button>
        </div>
    </div>
    
        `;

        colDiv.innerHTML = cardHTML;
        notaContainer.appendChild(colDiv);
    });
}

function generarID() {
    return Math.random().toString(36).substring(2, 15);
}

function crearNotaNueva(event) {
    // Obtén los valores del título y contenido desde la modal
    /* const titulo = document.querySelector('#titulo').value;
    const contenido = document.querySelector('#contenido').value; */
    const titulo = "titulo";
    const contenido = "Dummy contenido";

    // Luego, puedes usar esta función para obtener un nuevo ID único
    const nuevoID = generarID();

    // Crea un objeto con los datos de la nota
    const nuevaNota = {
        id: nuevoID,
        titulo: titulo,
        contenido: contenido
    };

    console.log(nuevaNota)

    fetch("http://127.0.0.1:3002/notes/create", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevaNota),
        credentials: 'same-origin' // Agrega esta línea
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error al enviar la nota:', error);
        })
}

// Llama a la función para mostrar las notas al cargar la página
mostrarNotas();

// Funciones de edición y eliminación (puedes personalizar estas funciones)
function editarNota(id) {
    alert("Editar nota con ID " + id);
}

function eliminarNota(id) {
    alert("Eliminar nota con ID " + id);
}

boton.addEventListener("click", crearNotaNueva);
//note.addEventListener("click", crearNotaNueva)