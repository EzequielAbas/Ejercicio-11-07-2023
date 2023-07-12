// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

let numero;
numero = prompt("Introducir un número para ver si es par o impar")
if (numero % 2 == 0) {
    console.log("El número " + numero + " es par. ")
    document.write("El número " + numero + " es par. ")
} else {
    console.log("El número " + numero + " es impar. ")
    document.write("El número " + numero + " es impar. ")
}


// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function compararNumeros(num1, num2) {
    if (num1 > num2) {
        console.log("El número " + num1 + " es mayor que " + num2 + ". ");
        document.write("El número " + num1 + " es mayor que " + num2 + ". ");
    } else if (num2 > num1) {
        console.log("El número " + num2 + " es mayor que " + num1 + ". ");
        document.write("El número " + num2 + " es mayor que " + num1 + ". ");
    } else {
        console.log("Los números " + num1 + " y " + num2 + " son iguales. ");
        document.write("Los números " + num1 + " y " + num2 + " son iguales. ");
    }
}

compararNumeros(11, 13); //El número 13 es mayor que 11
compararNumeros(5, 3); //El número 5 es mayor que 3


// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

/* Ejemplo número 20 */

let numero1 = parseInt(prompt("Ingrese un numero para ver si es múltiplo o no de 5: "));

if (numero1 % 5 == 0) {
    console.log("El número " + numero1 + " es múltiplo de 5. ");
    document.write("El número " + numero1 + " es múltiplo de 5. ");
} else {
    console.log("El número " + numero1 + " no es múltiplo de 5. ");
    document.write("El número " + numero1 + " no es múltiplo de 5. ");
}

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function imprimirNumeros(numero2) {
    for (let i = 0; i <= 10; i++) {
        console.log(i);
        document.write(i)
    }
}

imprimirNumeros(0);


// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function imprimirPalabra(palabra, numero3) {
    for (let i = 0; i < numero3; i++) {
        console.log(palabra);
    }
}

imprimirPalabra("Departamentos", 6);

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

function imprimirArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

const miArray = ["Carlos", "Roberto", "Marta", "Romina"];
imprimirArray(miArray);
const miArray2 = [1, 2, 3, 4];
imprimirArray(miArray2);

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

function imprimirArrayExcepto5to(array) {
    for (let i = 0; i < array.length; i++) {
        if (i !== 4) {
            console.log(array[i]);
        }
    }
}
const miArray3 = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28]; //En este caso elimina el 13 se encuentra en esa posición
imprimirArrayExcepto5to(miArray3);

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

function multiplicarArrayPorNumero(array4, numero4) {
    for (let i = 0; i < array4.length; i++) {
        const resultado4 = array4[i] * numero4;
        console.log(resultado4);
        document.write(resultado4);
    }
}

// Multiplicado por 3

const miArray4 = [2, 3, 6, 9, 12];
const miNumero4 = 3;
multiplicarArrayPorNumero(miArray4, miNumero4);