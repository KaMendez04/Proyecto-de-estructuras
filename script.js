let stack = [];
let stackTable = document.getElementById('stack-table');
let stackTbody = document.getElementById('stack-tbody');
let insertBtn = document.getElementById('insert-btn');
let deleteBtn = document.getElementById('delete-btn');
let readBtn = document.getElementById('read-btn');
let popupContainer = document.getElementById('popup-container');
let popup = document.getElementById('popup');
let popupText = document.getElementById('popup-text');
let popupClose = document.getElementById('popup-close');

// Función para insertar un elemento en el stack
function insertElement(element) {
    stack.push(element);
    updateStack();
}

// Función para eliminar el elemento más alto del stack
function deleteElement() {
    if (stack.length > 0) {
        stack.pop();
        updateStack();
    }
}

// Función para leer el elemento más alto del stack
function readElement() {
    if (stack.length > 0) {
        let element = stack[stack.length - 1];
        popupText.textContent = `Ingresaste: ${element}`;
        popupContainer.style.display = 'block';
        popupClose.addEventListener('click', () => {
            popupContainer.style.display = 'none';
        });
    }
}

// Función para actualizar la representación gráfica del stack
function updateStack() {
    stackTbody.innerHTML = '';
    stack.forEach((element, index) => {
        let stackElementHTML = document.createElement('tr');
        let stackElementTD = document.createElement('td');
        stackElementTD.textContent = element;
        stackElementHTML.appendChild(stackElementTD);
        stackTbody.appendChild(stackElementHTML);
    });
}

// Event listener para el botón de inserción
insertBtn.addEventListener('click', () => {
    let element = prompt('Introduce el elemento a insertar');
    if (element) {
        insertElement(element);
    }
});

// Event listener para el botón de eliminación
deleteBtn.addEventListener('click', () => {
    deleteElement();
});

// Event listener para el botón de lectura
readBtn.addEventListener('click', () => {
    readElement();
});