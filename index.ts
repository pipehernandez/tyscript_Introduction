// 1. Variables y constantes: Tipos, Tipos personalizados

// const id: number = 1;
// const nombre: string = "Head phones";
// const precio: number = 50000;
// type Product = {
//     id: number;
//     nombre: string;
//     precio: number;
// };
// const product: Product = { id, nombre, precio };
// console.log(product);



//2. Operadores (aritméticos, booleanos)

// function isPar(a:number): boolean {
//     if(a % 2 === 0){
//         return true;
//     }
//     return false;
// }
// console.log(isPar(10))



//3. Estructuras de decisión (if, switch, ternarios)

// const number: number = -41
// if(number > 0){
//     console.log("El número es positivo");
// } else if(number < 0){
//     console.log("El número es negativo");
// } else console.log("EL numero es 0")



//4. Estructuras de iteración (while, for, foreach, map)

// const names: string[] = ["Andres","Felipe","Laura", "Esteban"];
// for(let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }
// names.forEach(name => console.log(name));

// const namePlusS = names.map(name => name+"s")
// console.log(namePlusS)


//Estructuras de Datos y Funciones//

//1. Arrays | Listas


//1.1

// const numbers: number[] = [1,2,3,4,5,6,7,8,9,1]
// function sum(a:number[]):number{
//     return a.reduce((acc, curr) => acc + curr, 0);
// }
// console.log(sum(numbers));


//1.2

// const words:string[]=["los", "perros", "no", "hacen", "nada"]
// function joinWords(words: string[]):string{
//     return words.join(" ");
// }
// console.log(joinWords(words));


//1.3

// type User = {
//     id: number;
//     name: string;
// }
// const users: User[] = [
//     { id: 1, name: "Andres" },
//     { id: 2, name: "Felipe" },
//     { id: 3, name: "Laura" },]
// users.forEach(user => console.log(user.name))


//1.4

// const numbers:number[]= [1,34,23,546,7675,4554,5643]
// function findMax(numbers: number[]): number{
//     return Math.max(...numbers);
// }
// console.log(findMax(numbers));




//2. Objetos

//2.1

// type Car = {
//     brand: string;
//     model: string;
//     year: number;
// }
// const car: Car[] = [
//     { brand: "Ford", model: "Fiesta", year: 2014 }
// ]
// console.log(car)


//2.2

// class Car{
//     brand: string;
//     model: string;
//     year: number;

//     constructor(brand:string, model:string, year:number){
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }

//     static getCarInfo(car: Car): string {
//         return `Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}`;
//     }
// }
// const newCar = new Car('Ford', 'Fiesta', 2014)
// console.log(Car.getCarInfo(newCar))


//2.3

// function sumCarYear(car: Car): string{
//     return `Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year + 1}`;
// }
// console.log(sumCarYear(newCar))



// 3. Funciones

//3.1

// const numbers:number[]=[43,3246,2345,2345,7,87,234,254,65,3,34,346,76522,31,1,6,7678,9,98]
// function findMax(numbers: number[]): number{
//     return Math.max(...numbers);
// }
// console.log(findMax(numbers))

//3.2

// function years(y1:number, y2:number, y3:any):any{
//     if(typeof y3 !== "number"){
//         throw new Error("El tercer argumento debe ser un número");
//     }
//     try {
//         return `Año 1:${y1}, Año 2: ${y2}, Año 3: ${y3}`;
//     } catch (error) {
//         console.error("Error: ", error);
//         return 0;
//     }
// }
// console.log(years(2022, 2023, "2024"))


//3.3 

// function girarMatriz90GradosHoraria(matriz:number[][]) {
//     const n = matriz.length;
//     const matrizGirada = Array.from({ length: n }, () => Array(n).fill(0));
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             matrizGirada[j][n - 1 - i] = matriz[i][j];
//         }
//     }
//     return matrizGirada;
// }
// const matrizOriginal = [
//     [1, 2],
//     [3, 4]
// ];

// const matrizRotada = girarMatriz90GradosHoraria(matrizOriginal);
// console.log(matrizRotada);
