let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

function addNewKey(object, key, value) {
    object[key] = value;
}

addNewKey(lesson2, 'turno', 'noite')
console.log(lesson2);

function listKeys (object) {
    console.log(Object.keys(object));
}

listKeys(lesson3);

function calcSize (object) {
    return Object.keys(object).length;
}

console.log(calcSize(lesson2));