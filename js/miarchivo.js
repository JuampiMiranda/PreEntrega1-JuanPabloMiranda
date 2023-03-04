class Tratamientos{
    constructor(tipo,descripcion){
        this.tipo = tipo;
        this.descripcion = descripcion;
    }
}

const terapiaManual = new Tratamientos(1,'Se trata de la fórmula más clásica y más practicada de la fisioterapia. Suele relacionarse con los masajes pero también engloba otras técnicas como las movilizaciones, manipulaciones, bombeos, etc.');
const osteopatia = new Tratamientos(2,'La osteopatía es un conjunto de técnicas manuales encaminadas al tratamiento de dolores presentes en diferentes zonas del cuerpo mediante manipulaciones de las articulaciones.');
const neurodinamia = new Tratamientos(3,'La neurodinamia consiste en la realización de ejercicios enfocados a la movilización de los nervios asociados a la lesión en cuestión, provocando una liberación de los tejidos que lo rodean, produciendo así un alivio inmediato del dolor y disminuyendo la posible inflamación muscular.');
const drenajeLinfatico = new Tratamientos(4,'Son masajes realizados con las manos aplicados específicamente sobre los ganglios para aliviar las retenciones de líquidos. El fisioterapeuta localiza los ganglios y los manipula suavemente para vaciarlos, aliviando acumulaciones en el sistema linfático.');

console.log(terapiaManual,osteopatia,neurodinamia,drenajeLinfatico);

const bienvenida = alert ('¡Hola, bienvenido! Usted esta a punto de utilizar un simulador interactivo para conocer sobre los tratamientos que tenemos en nuestro Centro Kinesiologico GIMA.');

let selecTratamientos = +prompt ('Indique a continuación el número de tratamiento que desea conocer, entre las siguientes opciones: 1-Terapia Manual / 2-Osteopatia / 3-Neurodinamia / 4-Drenaje Linfatico.');

let tratamientoCorrecto = false;

while(tratamientoCorrecto === false){

    if(selecTratamientos === 1){
        tratamientoCorrecto = true;
    }else if(selecTratamientos === 2){
        tratamientoCorrecto = true;
    }else if(selecTratamientos === 3){
        tratamientoCorrecto = true;
    }else if(selecTratamientos === 4){
        tratamientoCorrecto = true;
    } else{
        selecTratamientos = +prompt('¡Indique un número correcto!');
    }
}

alert('El tratamiento indicado es: ' + selecTratamientos);

if(selecTratamientos === 1){
    alert(terapiaManual.descripcion);
} else if(selecTratamientos === 2){
    alert(osteopatia.descripcion);
} else if(selecTratamientos === 3){
    alert(neurodinamia.descripcion);
} else if(selecTratamientos === 4){
    alert(drenajeLinfatico.descripcion)
}

alert('Si desea volver a seleccionar un tratamiento toque la telca "F5". De lo contrario continuemos.')

if(selecTratamientos === 1){
    prompt('¿Desea sacar un turno con un especialista en Terapia Manual? Ingrese "SI", de lo contrario precione "F5" para volver a seleccionar un tratamiento');
} else if(selecTratamientos === 2){
    prompt('¿Desea sacar un turno con un especialista en Osteopatía? Ingrese "SI", de lo contrario precione "F5" para volver a seleccionar un tratamiento');
} else if(selecTratamientos === 3){
    prompt('¿Desea sacar un turno con un especialista en Neurodinámia? Ingrese "SI", de lo contrario precione "F5" para volver a seleccionar un tratamiento');
} else if(selecTratamientos === 4){
    prompt('¿Desea sacar un turno con un especialista en Drenaje Linfático? Ingrese "SI", de lo contrario precione "F5" para volver a seleccionar un tratamiento');
}